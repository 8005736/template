module.exports = function () {
    $.gulp.task('watch', function () {
		$.gulp.watch('./pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('./style/style.less', $.gulp.series('styles'));
		$.gulp.watch('./style/__defaults.less', $.gulp.series('styles'));
    });
};
