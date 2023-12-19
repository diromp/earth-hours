'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var postcss = require('gulp-postcss');
var tailwindcss = require('tailwindcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
sass.compiler = require('node-sass');

// Specify the Source files
var SRC_SCSS      = './src/scss/*.scss';

// Specify the Destination folders
var DEST_CSS      = './public/css';

gulp.task('sass', function() {
    var processors = [
        tailwindcss,
    ];
    return gulp.src(SRC_SCSS)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(DEST_CSS));
});

gulp.task('prod', function() {
    var processors = [
        tailwindcss,
        autoprefixer,
    ];
    return gulp.src(SRC_SCSS)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(DEST_CSS));
});

// Run:
// gulp watch
// Starts watcher and keeps compiling the css file as you make changes
gulp.task('watch', function () {
    gulp.watch("./**/*.scss", gulp.series('prod'));
});