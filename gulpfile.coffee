gulp = require('gulp')
coffee = require('gulp-coffee')
less = require('gulp-less')
minify = require('gulp-minify-css')
uglify = require('gulp-uglify')
concat = require('gulp-concat')
merge = require('merge-stream')

gulp.task('coffee', ->
  merge(
    gulp.src('static/js/*.js'),
    gulp.src('static/js/*.litcoffee').pipe(coffee())
  )
  .pipe(concat('app.js'))
  .pipe(gulp.dest('static'))
)

gulp.task('less', ->
  gulp.src('static/css/style.less')
    .pipe(less())
    .pipe(minify())
    .pipe(gulp.dest('static'))
)

gulp.task('default', ['less', 'coffee'])