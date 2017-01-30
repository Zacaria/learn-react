const gulp = require('gulp');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const Server = require('karma').Server;
const browserSync = require("browser-sync").create();
const config = require('./webpack.config.js');

const filesToWatch = [
  'index.html',
  'src/**/*',
  'gulpfile.js',
  'package.json',
  'webpack.config.js',
  'karma.conf.js'
];

gulp.task('dist', () =>
  gulp
    .src('src/index.js')
    .pipe(plumber())
    .pipe(webpack(config))
    .pipe(gulp.dest('dist/'))
);

/**
 * Run test once and exit
 */
gulp.task('test', (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function() {
    done();
  }).start();
});

gulp.task('js-watch', ['dist', 'test'], () => browserSync.reload());

gulp.task('default', ['dist', 'test'], () => {

  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(filesToWatch, ['js-watch']);
});
