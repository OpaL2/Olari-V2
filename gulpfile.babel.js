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
import gless from 'gulp-less';
import ginject from 'gulp-inject';
import livereload from 'gulp-livereload';
import concat from 'gulp-concat';

import gwppot from 'gulp-wp-pot';
import gpotomo from 'gulp-po2mo';

export const clean = () => del(['build/**/*']);

export function img() {
  return gulp.src('src/img/**/*.{png,svg,jpeg,jpg}')
    .pipe(gulp.dest('build/images/'))
    .pipe(livereload());
}

export function lang() {
  return gulp.src('src/lang/**/*.po')
    .pipe(gpotomo())
    .pipe(gulp.dest('build/languages'))
    .pipe(livereload());
}

export function wp_required() {
  return gulp.src('src/wp-required/style.css')
    .pipe(gulp.dest('build/'))
    .pipe(livereload());
}

export const less = build_less('src/less/**/*.less', 'build/css/');

export const js = build_js('./src/js/app.js', './build/js');
export const js_production = build_js('src/js/app.js', 'build/js/');

export function templates() {
  return gulp.src(['src/templates/**/*.php', '!src/templates/functions.php'])
    .pipe(gulp.dest('build/'))
    .pipe(livereload());
}

export function wppot() {
  return gulp.src('build/**/*.php')
    .pipe(gwppot({package: 'olariv2'}))
    .pipe(gulp.dest('src/lang/olariv2.pot'))
    .pipe(livereload());
}

export function watch() {
  livereload.listen()
  gulp.watch('src/js/**/*.{js,jsx}', gulp.series(js, inject));
  gulp.watch('src/less/**/*.less', gulp.series(less, inject));
  gulp.watch('src/lang/**/*.po', lang);
  gulp.watch(['src/templates/**/*.php', '!src/templates/functions.php'], gulp.series(templates, wppot));
  gulp.watch('src/wp-required/style.css', wp_required);
  gulp.watch('src/img/**/*.{png,svg,jpeg,jpg}', img);
  gulp.watch(['src/templates/functions.php', 'src/widgets/**/*.php'], gulp.series(inject, wppot));
}

export function inject() {
  var target = gulp.src('src/templates/functions.php');
  var sources = gulp.src(['build/js/**/*.js', 'build/css/**/*.css'], {read: false});

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
  .pipe(gulp.src(['src/widgets/**/*.php']))
  .pipe(concat('functions.php'))
  .pipe(gulp.dest('build/'))
  .pipe(livereload());
}

export const build = gulp.series(
  clean,
  gulp.parallel(js, less, wp_required, lang, templates, img),
  inject,
  wppot
);

export const build_and_watch = gulp.series(build, watch);
export default build_and_watch;


function build_js(startPath, targetDirectory) {
  return function build_js() {
    return browserify({entries: startPath, extensions:['.jsx', '.js'], debug: true})
      .transform(babelify, {presets: ['env', 'react'], sourceMaps: true})
      .bundle()
      .on('error', (err) => {
        console.log(err);
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

function build_less(sourceDirectory, targetDirectory) {
  return function build_less() {
    return gulp.src(sourceDirectory)
      .pipe(sourcemaps.init())
      .pipe(gless())
      .pipe(gcs())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(targetDirectory));
  }
}
