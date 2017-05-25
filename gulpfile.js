var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var striplog = require('gulp-strip-debug');
var minfycss = require('gulp-minify-css');
var gutil = require('gulp-util');

var dstBuildPath = 'public/build/';

gulp.task('js', function() {
    var src = [
        'src/js/lib/double-metaphone.js',
        'src/js/movie/model.js',
        'src/js/movie/transformer.js',
        'src/js/api/client.js',
        'src/js/score/evaluator.js',
        'src/js/score/fetcher.js',
        'src/js/speech/listener.js',
        'src/js/renderer/error.js',
        'src/js/renderer/movies.js',
        'src/js/renderer/recorder.js',
        'src/js/renderer/app.js',
        'src/js/renderer/main.js',
        'src/js/**/*.js',
    ];

    return gulp.src(src)
        .pipe(concat('app.min.js'))
        .pipe(striplog())
        .pipe(gulp.dest(dstBuildPath))
        .on('error', gutil.log);
});

gulp.task('css', function() {
    var src = [
        'node_modules/milligram/dist/milligram.min.css',
        'src/css/**/*.css',
    ];

    return gulp.src(src)
        .pipe(concat('app.min.css'))
        .pipe(minfycss())
        .pipe(gulp.dest(dstBuildPath))
        .on('error', gutil.log);
});

gulp.task('clean', function() {
    return gulp
    .src(
        dstBuildPath, {
        read: false
    })
    .pipe(clean());
});

gulp.task('default', ['clean'], function() {
    gulp.start('css', 'js');
});