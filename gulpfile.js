const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const uglifyCss = require('gulp-uglifycss');
const concat = require('gulp-concat')

var jade = require('gulp-jade');
var del = require('del');

gulp.task('jade', function() {
    return gulp.src('src/**/*.jade')
            .pipe(jade({ pretty: true })) //pipe to jade plugin
            .pipe(gulp.dest('dist')); //tell gulp our output folder
});

gulp.task('scss', function(){
    return gulp.src('src/scss/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('main.css'))
            .pipe(uglifyCss({
                "amxLineLen": 80,
                "uglyComments": true
            }))
            .pipe(gulp.dest('dist/css'))
})

gulp.task('scripts', function(){
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})

gulp.task('clean', function(){
    return del([
        'dist'
    ]);
})

gulp.task('default', ['clean'], function() {
    gulp.start(['jade', 'scss', 'scripts']);
})