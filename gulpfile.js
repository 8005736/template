"use strict";

global.$ = {
	tasks: [
		'./gulp/tasks/clean',
		'./gulp/tasks/pug',
		'./gulp/tasks/serve',
		'./gulp/tasks/styles',
		'./gulp/tasks/watch'
	],
	gulp: require('gulp'),
	del: require('del'),
	browserSync: require('browser-sync').create()
};

$.tasks.forEach(function (taskPath) {
	require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'pug', 'styles'
	)
));

$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel(
		'watch',
		'serve'
	)
));
