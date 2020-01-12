var plumber = require('gulp-plumber');
var less = require('gulp-less');

module.exports = function () {
	$.gulp.task('styles', () => {
		return $.gulp.src('./style/style.less')
			.pipe(plumber())
			.pipe(less())
			.pipe($.gulp.dest('./css'))
			.on('end', $.browserSync.reload);
	});
};
