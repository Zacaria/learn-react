const gulp = require('gulp');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const browserSync = require("browser-sync").create();
const config = require('./webpack.config.js');

gulp.task('dist', () =>
    gulp
        .src('src/index.js')
        .pipe(plumber())
        .pipe(webpack(config))
        .pipe(gulp.dest('dist/'))
);

gulp.task('js-watch', ['dist'], () => browserSync.reload());

gulp.task('default', ['dist'], () => {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch([
        'index.html', 'src/**/*', 'gulpfile.js', 'package.json'
    ], ['js-watch']);
});
