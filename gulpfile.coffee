gulp = require('gulp')
less = require('gulp-less')
minify = require('gulp-minify-css')

gulp.task('less', ->
  gulp.src('static/css/style.less')
    .pipe(less())
    .pipe(minify())
    .pipe(gulp.dest('static'))
)

gulp.task('default', ['less'])