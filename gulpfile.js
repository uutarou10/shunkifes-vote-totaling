const gulp = require('gulp')
const webpack = require('webpack-stream')
const del = require('del')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')

const webpackFrontConfig = (isWatch = false) => {
  return {
    devtool: 'source-map',
    watch: isWatch,
    output: {
      filename: 'bundle.js'
    },
    cache: true,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: '/node_modules/',
          options: {
            presets: ['es2015', 'react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      ]
    }
  }
}

gulp.task('compile-front', ['clean-renderer'], () => {
  gulp.src('./src/renderer/index.js')
    .pipe(webpack(webpackFrontConfig(false)))
    .pipe(gulp.dest('./dist/renderer/'))
})

gulp.task('compile-front-watch', ['clean-renderer'], () => {
  gulp.src('./src/renderer/index.js')
    .pipe(webpack(webpackFrontConfig(true)))
    .pipe(gulp.dest('./dist/renderer/'))
})

gulp.task('compile-main', ['clean-main'], () => {
  gulp.src('./src/main/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/main/'))
})

gulp.task('copy-static', ['clean-static'], () => {
  gulp.src('./src/static/**', {base: 'src'})
    .pipe(gulp.dest('./dist/'))
})

gulp.task('clean-renderer', () => {
  return del.sync('./dist/renderer/**')
})

gulp.task('clean-main', () => {
  return del.sync('./dist/main/**')
})

gulp.task('clean-static', () => {
  return del.sync('./dist/static/**')
})

gulp.task('watch', ['copy-static', 'compile-main', 'compile-front-watch'], () => {
  gulp.watch('./src/static/**/*', ['copy-static'])
  gulp.watch('./src/renderer/**/*', ['compile-main'])
})

gulp.task('default', ['copy-static', 'compile-main', 'compile-front'])
