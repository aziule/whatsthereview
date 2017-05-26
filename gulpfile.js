var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var striplog = require('gulp-strip-debug');
var minfycss = require('gulp-minify-css');
var pump = require('pump');

var dstBuildPath = 'public/build/';

gulp.task('js', function(cb) {
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

    pump([
        gulp.src(src),
        concat('app.min.js'),
        // striplog(),
        // uglify(),
        gulp.dest(dstBuildPath),
    ], cb);
});

gulp.task('css', function(cb) {
    var src = [
        'node_modules/milligram/dist/milligram.min.css',
        'src/css/**/*.css',
    ];

    pump([
        gulp.src(src),
        concat('app.min.css'),
        minfycss(),
        gulp.dest(dstBuildPath),
    ], cb);
});

gulp.task('clean', function() {
    pump([
        gulp.src(
            dstBuildPath, {
                read: false
            }
        ),
        clean(),
    ]);
});

gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/css/**/*.css', ['css']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('css', 'js');
});
