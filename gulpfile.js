var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    scss = require('gulp-sass'),
    nodemon = require('gulp-nodemon');


gulp.task('nodemon', function () {
    nodemon({
        script: './server.js',
        ext: 'js jsx',
        ignore: './public'
    })
});

gulp.task('webpack', function() {
    return gulp.src('./views/js/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(''));
});

gulp.task('scss', function() {
    return gulp.src('./public/scss/index.scss')
        .pipe(scss())
        .pipe(gulp.dest('./public/build/'));
});


gulp.task('watch', function () {
    gulp.watch(['./views/**/*.jsx', './views/*.jsx', './public/scss/**/*.scss'], ['webpack', 'scss']);
});


gulp.task('serve', ['nodemon', 'watch']);
