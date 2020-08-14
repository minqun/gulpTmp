const gulp = require('gulp')
const clear = require('gulp-clean');
const rename = require("gulp-rename");
const sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify-es').default;
const path = 'dist/'
gulp.task('clear', function () {
    return gulp.src('dist', {
      allowEmpty: true
    }).pipe(clear())
});
gulp.task('es-js', function () {
  return gulp.src('tmp/js/*.js')
  .pipe(rename(function (path) {
    // Returns a completely new object, make sure you return all keys needed!
    return {
      dirname: path.dirname,
      basename: path.basename + ".min",
      extname: ".js"
    };
  }))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(gulp.dest(path));
});


gulp.task('default', gulp.series('clear', 'es-js'))
