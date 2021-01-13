const gulp = require('gulp');
const browserSync = require('browser-sync');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

gulp.task('bs-reload', (done) => {
  browserSync.reload();
  done();
});

gulp.task('webpack', () => {
  return webpackStream(webpackConfig, webpack).pipe(gulp.dest("dist"));
});

gulp.task('default', () => {
  browserSync.init({
    server: {
      baseDir: '.',
      index: 'index.html'
    },
    port: 3000,
    reloadOnRestart: true
  });
  webpackStream(webpackConfig, webpack).pipe(gulp.dest("dist"));
  gulp.watch('./js/**/*.js', gulp.series(['webpack']));
  gulp.watch("./../**/*.html", gulp.series(['bs-reload']));
});