var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	precss = require('precss'),
	sass = require('gulp-sass'),
	cssnano = require('cssnano'),
	minify = require('gulp-minify'),
	concat = require('gulp-concat');


gulp.task('css', function () {
	var processors = [
		autoprefixer,
		cssnano(),
		precss
	];
	return gulp.src('styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./'));
});

gulp.task('scripts', function() {
		var scripts = [
				'scripts/vivus.min.js',
				'scripts/scripts.js'
		];
		return gulp.src(scripts)
				.pipe(concat('scripts.js'))
				.pipe(minify({
						ext:{
								min:'-min.js'
						}
				}))
				.pipe(gulp.dest(staticFolder +'dist/'));
});


gulp.task('watch', function() {
	gulp.watch('styles/*.scss', ['css']);
});

gulp.task('build', ['css']);

