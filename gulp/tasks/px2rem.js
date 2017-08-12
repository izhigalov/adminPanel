'use strict';

module.exports = function() {
    $.gulp.task('pxtorem', function() {
        gulp.src('css/**/*.css')
            .pipe(pxtorem())
            .pipe(gulp.dest('css'));
    });
};