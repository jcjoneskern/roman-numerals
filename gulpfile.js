
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('default', () =>
    gulp.src('spec/spec.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine())
);
