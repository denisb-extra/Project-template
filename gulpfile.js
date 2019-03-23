const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();


function styles(){
	return gulp.src('app/scss/**/style.scss')
		.pipe(sass({
			includePaths: require('node-normalize-scss').includePaths
		}))
		.pipe(concat('style.css'))
		.pipe(postcss([ autoprefixer({
			browsers: ['> 0.1%'],
			cascade: false
		}), ]))
		/*
		.pipe(cleanCSS({
			level: 2
		}))
		*/
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