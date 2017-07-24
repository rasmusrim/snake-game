var gulp        = require('gulp');

var rename  = require('gulp-rename');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var livereload  = require('gulp-livereload');
var sass = require('gulp-sass');

gulp.task('build', function () {
    // app.js is your main JS file with all your module inclusions
    return browserify({entries: './src/js/app.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(livereload());
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('copy', function() {
    return gulp
        .src('./src/index.html')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('dist'));        

});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./src/js/*.js', ['build']);
    gulp.watch('./src/sass/*.scss', ['sass']);
    gulp.watch('./src/*.html', ['copy']);
});

gulp.task('default', ['build', 'sass', 'copy', 'watch']);