var plumber = require('gulp-plumber');
var pug = require('gulp-pug');

module.exports = function () {
    $.gulp.task('pug', () => {
        return $.gulp.src('./pug/*.pug')
            .pipe(plumber())
            .pipe(pug({
                pretty: true
            }))
            .pipe(plumber.stop())
            .pipe($.gulp.dest('./'))
            .on('end', $.browserSync.reload);
    });
};
