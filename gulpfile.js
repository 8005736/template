var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

/******* tasks ********/
gulp.task('browserSync', function() {
    browserSync.init({
        server: "./"
    });
})
gulp.task('pug', function() {
    return gulp.src('pug/*.pug')

        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
        .on("end", browserSync.reload)
});

gulp.task('less', function() {
    return gulp.src('style/*.less')
    .pipe(concat('ready.less'))
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream: true}))
});

/******* watch ********/
gulp.task('watch', ['browserSync', 'pug', 'less'], function() {
    gulp.watch("style/*.less", ['less']);
    gulp.watch("pug/*.pug", ['pug']);
    gulp.watch("pug/includes/*.pug", ['pug']);
    gulp.watch('*.html', browserSync.reload);
});
/******* default ********/
gulp.task('default', ['watch']);