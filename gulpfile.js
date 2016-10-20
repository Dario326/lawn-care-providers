var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var express = require('express');
var app = express();
var gutil = require('gulp-util');
var path = require('path');
var data = require('gulp-data');



app.use(express.static(path.resolve('./build')));
app.listen('8080', function(){
    gutil.log('listening on', '8080');
});

gulp.task('html', function(){
    gulp.src('jade/index.jade')
        .pipe(jade({
        pretty: true
        }))
        .pipe(gulp.dest('build'))
        .pipe(livereload());
});
gulp.task('views', function(){
    gulp.src('jade/views/*.jade')
        .pipe(jade({
        pretty: true
        }))
        .pipe(gulp.dest('build/views'))
        .pipe(livereload());
});

gulp.task('css', function(){
    gulp.src(['css/*.css', 'sass/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(livereload());
})

gulp.task('images', function() {
    gulp.src('images/*')
        .pipe(gulp.dest('build/images'))
        .pipe(livereload());
});
gulp.task('bower_components', function() {
    gulp.src('bower_components/**')
        .pipe(gulp.dest('build/bower_components'))
        
});

gulp.task('js', function() {
    gulp.src('js/**')
        .pipe(gulp.dest('build/js'))
        .pipe(livereload());
});

gulp.task('watch', ['build'], function() {
    
    livereload.listen();
    
    gulp.watch('jade/**/*.jade', ['html']);
    gulp.watch('sass/*.scss', ['css']);
    gulp.watch('images/*', ['images']);
    gulp.watch('bower_components/*', ['bower_components']);
    gulp.watch('jade/**/*.jade', ['views']);
    gulp.watch('js/**/*.js', ['js']);
    
    
});

gulp.task('build', ['html', 'css', 'images', 'js', 'bower_components', 'views'])