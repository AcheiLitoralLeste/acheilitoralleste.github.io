/******************************************************************
4. JS TASKS
   path: scr/js/*.js
   save to: public/js/main.js
   dependence: gulp-jshint, gulp-uglify, gulp-concat, gulp-rename
*******************************************************************/

var gulp = require('gulp'),
    config = require('../gulp.conf.js'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    stylish = require('jshint-stylish');

// var vendor = {
//     // vendor scripts required to start the app
//     base: {
//         source: require('../vendor.json')
//     }
// };


// lint my custom js
gulp.task(config.tasks.jslint, function() {
    return gulp.src(config.src.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest(config.dist.js));
});

// minify all js files that shold not be concatinated
gulp.task(config.tasks.jsmin, function() {
    return gulp.src(config.dist.js + 'main.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.dist.js));
});

//minify & concatinate all other js
gulp.task(config.tasks.jsconcat, function() {
   return gulp.src('src/scripts/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/scripts/'));
});
// gulp.task(config.tasks.jsbower, function() {
//     return gulp.src(vendor.base.source)
//         .pipe(concat('base.js'))
//         .pipe(gulp.dest('public/scripts/'));
// });
