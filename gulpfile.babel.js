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

import gwppot from 'gulp-wp-pot';
import gpotomo from 'gulp-po2mo';

export const clean = () => del(['build/**/*']);

export function img() {
  return gulp.src('src/img/**/*.{png,svg,jpeg,jpg}')
    .pipe(gulp.dest('build/images/'));
}

export function lang() {
  return gulp.src('src/lang/**/*.po')
    .pipe(gpotomo())
    .pipe(gulp.dest('build/languages'));
}

export function wp_required() {
  return gulp.src('src/wp-required/style.css')
    .pipe(gulp.dest('build/'));
}

export const less = build_less('src/less/**/*.less', 'build/css/');

export const js = build_js('src/js/app.jsx', 'build/js/');
export const js_production = build_js('src/js/app.jsx', 'build/js/');

export function templates() {
  return gulp.src('src/templates/**/*.php')
    .pipe(gulp.dest('build/'));
}

export function wppot() {
  return gulp.src('src/templates/**/*.php')
    .pipe(gwppot({package: 'olari-v2'}))
    .pipe(gulp.dest('src/lang/olari-v2.pot'))
}

export function watch() {
  gulp.watch('src/js/**/*.{js, jsx}', js);
  gulp.watch('src/less/**/*.less', less);
  gulp.watch('src/lang/**/*.po', lang);
  gulp.watch('src/templates/**/*.php', gulp.parallel(templates, wppot));
  gulp.watch('src/wp-required/style.css', wp_required);
  gulp.watch('src/img/**/*.{png,svg,jpeg,jpg}');
}

export const build = gulp.series(
  clean,
  gulp.parallel(js, less, wp_required, lang, templates, wppot, img));

export const build_and_watch = gulp.series(build, watch);

function build_js(startPath, targetDirectory) {
  return function build_js() {
    return browserify({entries: startPath, extensions:['.jsx', '.js']})
      .transform(babelify, {presets: ['env', 'react'], sourceMaps: true})
      .bundle()
      .on('error', (err) => {
        console.log(err);
        gulp.emit('end');
      })
      .pipe(source())
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
      .transform(babelify, {presets: ['env', 'react'], sourceMaps: true})
      .bundle()
      .on('error', (err) => {
        console.log(err);
        this.emit('end');
      })
      .pipe(source())
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write())
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
