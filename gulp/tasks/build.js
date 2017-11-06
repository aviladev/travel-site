const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const del = require('del')
const usemin = require('gulp-usemin')
const rev = require('gulp-rev')
const cssnano = require('gulp-cssnano')
const uglify = require('gulp-uglify')
const browserSync = require('browser-sync').create()

gulp.task('previewDist', () => {
  browserSync.init({
    browser: 'google-chrome',
    notify: false,
    server: {
      baseDir: 'docs'
    }
  })
})

gulp.task('deleteDistFolder', () =>
  del('./docs')
)

gulp.task('optimizeImages', ['deleteDistFolder'], () =>
  gulp.src(['./app/assets/images/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(
      gulp.dest('./docs/assets/images')
    )
)

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], () =>

  gulp.src('./app/index.html')
    .pipe(
      usemin({
        css: [rev, cssnano],
        appjs: [rev, uglify],
        vendorjs: [rev, uglify]
      })
    )
    .pipe(
      gulp.dest('./docs')
    )
)

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin'], () =>
  gulp.start('previewDist')
)
