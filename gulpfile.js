var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync').create();
/******* tasks ********/
gulp.task('browserSync', function() {
    browserSync.init({
        server: "./"
    });
})
gulp.task('pug', function() {
    return gulp.src('pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
        .on("end", browserSync.reload)
});
gulp.task('less', function() {
    return gulp.src('style/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream: true}))
});
/******* watch ********/
gulp.task('watch', ['browserSync', 'pug', 'less'], function() {
    gulp.watch("style/*.less", ['less']);
    gulp.watch("pug/*.pug", ['pug']);
    gulp.watch('*.html', browserSync.reload);
});
/******* default ********/
gulp.task('default', ['watch']);