<<<<<<< HEAD
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();

function styles(){
	return gulp.src('app/scss/**/style.scss')
		.pipe(sass())
		.pipe(postcss([ autoprefixer() ]))
		.pipe(gulp.dest('./app/css'))
		.pipe(browserSync.reload({
	    	stream: true
	    }))
}

function scripts(){
}

function reload(){
	browserSync.reload("*.html");
}
function watch(){
	browserSync.init({
		files: ["app/*.html", "app/js/*.js"],
	    server: "./app"
	});

	gulp.watch('app/scss/**/*', styles);
}

gulp.task('styles', styles);
//gulp.task('scripts', scripts);

gulp.task('watch', watch);

gulp.task('default',  gulp.series('styles', 'watch'));
=======
var gulp = require('gulp');

var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

var useref = require('gulp-useref');

var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

var cssnano = require('gulp-cssnano');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

var del = require('del');

var runSequence = require('run-sequence');

var plumber = require('gulp-plumber');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulpIf('*.css', postcss([autoprefixer])))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
});


gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});

gulp.task('useref', function(){

  function createErrorHandler(name) {
    return function (err) {
      console.error('Error from ' + name + ' in compress task', err.toString());
    };
  }

  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .on('error', createErrorHandler('uglify'))
    .pipe(gulpIf('*.css', postcss([autoprefixer])))

    .pipe(gulp.dest('dist'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});


gulp.task('copy-js', function() {
  return gulp.src('app/js/**/*')
  .pipe(gulp.dest('dist/js'))
});


gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
});

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});

>>>>>>> 6b946ee520f7f348c20a7f4cef607dbd7b5798ce
