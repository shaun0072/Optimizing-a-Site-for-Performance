"use strict";

var gulp = require('gulp'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    postcss      = require('gulp-postcss');

gulp.task("concatScripts", function() {
    return gulp.src([
        'js/jquery.js',
		'js/fastclick.js',
		'js/foundation.js',
		'js/foundation.equalizer.js',
		'js/foundation.reveal.js',
		'js/scripts.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'));
});

gulp.task("concatCSS", function() {
    return gulp.src([
        'css/normalize.css',
		'css/foundation.css',
		'css/basics.css',
		'css/menu.css',
		'css/hero.css',
		'css/photo-grid.css',
		'css/modals.css',
		'css/footer.css'])
    .pipe(concat('main.css'))
    .pipe(gulp.dest('css'));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp.src("js/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task("minifyCSS", ["concatCSS"], function() {
  return gulp.src("css/main.css")
    .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('clean', function() {
  del(['dist', 'css/style.css*', 'js/app*.js*']);
});

gulp.task("build", ['minifyScripts'], function() {
  return gulp.src(["css/style.css", "js/app.min.js", 'index.html',
                   "img/**", "fonts/**"], { base: './'})
            .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);

gulp.task("default", ["build"]);