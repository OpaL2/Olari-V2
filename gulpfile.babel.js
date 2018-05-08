'use strict';

import gulp from 'gulp';
import del from 'del';
import gcs from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babelify from 'babelify';
import sourcemaps from 'gulp-sourcemaps';
import gsass from 'gulp-sass';
import ginject from 'gulp-inject';
import livereload from 'gulp-livereload';
import concat from 'gulp-concat';

import gwppot from 'gulp-wp-pot';
import gpotomo from 'gulp-po2mo';

export const clean = () => del(['build/**/*']);

export const ai1ec_clean = () => del(['build-ai1ec/**/*']);

function img() {
  return gulp.src('src/img/**/*.{png,svg,jpeg,jpg}')
    .pipe(gulp.dest('build/images/'))
    .pipe(livereload());
}

function ai1ec_img() {
  return gulp.src('src-ai1ec/img/**/*.{png,svg,jpeg,jpg,gif}')
    .pipe(gulp.dest('build-ai1ec/img/'))
    .pipe(livereload());
}

function lang() {
  return gulp.src('src/lang/**/*.po')
    .pipe(gpotomo())
    .pipe(gulp.dest('build/languages'))
    .pipe(livereload());
}

function wp_required() {
  return gulp.src('src/wp-required/style.css')
    .pipe(gulp.dest('build/'))
    .pipe(livereload());
}

function ai1ec_wp_required() {
  return gulp.src('src-ai1ec/wp-required/style.css')
    .pipe(gulp.dest('build-ai1ec/'))
    .pipe(livereload());
}

const sass = build_sass(['src/style/**/*.scss'], 'build/css/');

const ai1ec_sass = build_sass(['src-ai1ec/style/**/*.scss'], 'build-ai1ec/css/');

const js = build_js('./src/js/app.js', './build/js');
const js_production = build_js_production('src/js/app.js', 'build/js/');

function templates() {
  return gulp.src(['src/templates/**/*.php', '!src/templates/functions.php'])
    .pipe(gulp.dest('build/'))
    .pipe(livereload());
}

function ai1ec_templates() {
  return gulp.src(['src-ai1ec/templates/**/*.php'])
    .pipe(gulp.dest('build-ai1ec/'))
    .pipe(livereload());
}

function ai1ec_twig() {
  return gulp.src('src-ai1ec/twig/**/*.twig')
    .pipe(gulp.dest('build-ai1ec/twig/'))
    .pipe(livereload());
}

function includes() {
  return gulp.src('src/includes/**/*.php')
    .pipe(gulp.dest('build/includes/'));
}

function wppot() {
  return gulp.src('build/**/*.php')
    .pipe(gwppot({package: 'olariv2'}))
    .pipe(gulp.dest('src/lang/olariv2.pot'))
    .pipe(livereload());
}

function watch() {
  livereload.listen()
  gulp.watch('src/js/**/*.{js,jsx}', gulp.series(js, inject));
  gulp.watch('src/style/**/*.scss', gulp.series(sass, inject));
  gulp.watch('src/lang/**/*.po', lang);
  gulp.watch(['src/templates/**/*.php', '!src/templates/functions.php'], gulp.series(templates, wppot));
  gulp.watch('src/wp-required/style.css', wp_required);
  gulp.watch('src/img/**/*.{png,svg,jpeg,jpg}', img);
  gulp.watch(['src/templates/functions.php', 'src/widgets/**/*.php'], gulp.series(inject, wppot));
  gulp.watch(['src/includes/**/*.php'], gulp.series(includes, wppot));
  gulp.watch(['src-ai1ec/style/**/*.scss'], ai1ec_sass);
  gulp.watch(['src-ai1ec/img/**/*.{png,svg,jpeg,jpg,gif}'], ai1ec_img);
  gulp.watch(['src-ai1ec/templates/**/*.php'], ai1ec_templates);
  gulp.watch(['src-ai1ec/twig/**/*.twig'], ai1ec_twig);
  gulp.watch(['src-ai1ec/wp-required/style.css'], ai1ec_wp_required);
}


function inject() {
  var target = gulp.src('src/templates/functions.php');
  var sources = gulp.src(['build/js/**/*.js', 'build/css/**/*.css', 'build/customizer/**/*.php'], {read: false});

  return target.pipe(ginject(sources ,{
    transform: function (filepath, file){
      if(filepath.slice(-3) === '.js') {
        return '<?php wp_register_script("' + 'olariv2-' + file.relative.replace(/\.[^/.]+$/, "") + '", get_template_directory_uri() . "/js/' + file.relative + '", array(), 1.0, true);' + "\n" + 'wp_enqueue_script("olariv2-' + file.relative.replace(/\.[^/.]+$/, "") + '" ); ?>' ;
      }
      if(filepath.slice(-4) === '.css') {
        return '<?php wp_enqueue_style("' + 'olariv2-'+ file.relative.replace(/\.[^/.]+$/, "") + '", get_template_directory_uri() . "/css/' + file.relative + '", false, "1.0" ,"all"); ?>';
      }

      return inject.transform.apply(inject.transform, arguments);
    }
  }))
  .pipe(gulp.dest('build/'))
  .pipe(livereload());
}

const build_dev = gulp.series(
  clean,
  gulp.parallel(js, sass, wp_required, lang, templates, img, includes),
  inject,
  wppot
);

const ai1ec_build_dev = gulp.series(
  ai1ec_clean,
  gulp.parallel(ai1ec_twig, ai1ec_templates, ai1ec_sass, ai1ec_img, ai1ec_wp_required)
);

const build = gulp.series(
  gulp.parallel(clean, ai1ec_clean),
  gulp.parallel(js_production, sass, wp_required, lang, templates, img,ai1ec_twig, ai1ec_templates, ai1ec_sass, ai1ec_img, ai1ec_wp_required),
  inject
);

export {build};

const build_and_watch = gulp.series(gulp.parallel(build_dev, ai1ec_build_dev), watch);
export {build_and_watch as dev};


function build_js(startPath, targetDirectory) {
  return function build_js(done) {
    return browserify({entries: startPath, extensions:['.jsx', '.js'], debug: true,
      paths: ['node_modules/', 'src/js/']})
      .transform(babelify, {presets: ['env', 'react'], sourceMaps: true})
      .bundle()
      .on('error', (err) => {
        console.log(err);
        done();
      })
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(targetDirectory));
  }
}

function build_js_production(startPath, targetDirectory) {
  return function build_js_production() {
    process.env.NODE_ENV = 'production';
    return browserify({entries: startPath, extensions:['.jsx', '.js']})
      .transform(babelify, {presets: ['env', 'react']})
      .bundle()
      .on('error', (err) => {
        console.log(err);
      })
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(targetDirectory));
  }
}

function build_sass(sourceDirectory, targetDirectory) {
  return function build_sass(done) {
    return gulp.src(sourceDirectory)
      .pipe(sourcemaps.init())
      .pipe(gsass().on('error', (err) => {console.log(err); done();}))
      .pipe(gcs())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(targetDirectory));
  }
}
