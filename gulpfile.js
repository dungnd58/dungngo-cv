const gulp = require('gulp');
const sass = require('gulp-sass');

var jade = require('gulp-jade');
var del = require('del');

gulp.task('jade', function() {
    return gulp.src('src/**/*.jade')
            .pipe(jade({ pretty: true })) //pipe to jade plugin
            .pipe(gulp.dest('dist')); //tell gulp our output folder
});

gulp.task('scss', function(){
    
})

gulp.task('clean', function(){
    return del([
        'dist'
    ])
})

gulp.task('default', ['clean'], function() {
    gulp.start(['jade']);
})