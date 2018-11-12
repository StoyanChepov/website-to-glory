var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var $ = require('gulp-load-plugins')();

var path = {
	SCSS_SRC	: './scss/**/*.scss',
	SCSS_DST	: './css',
<<<<<<< HEAD
	HTML_SRC	: ['./css/*.css','./*.html','./_post/*.*','./_layouts/*.*', './_includes/*.*'],
}

gulp.task('sass', function () {
	
	gulp.src( path.SCSS_SRC )
	.pipe($.sass())
	.pipe($.autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
	.pipe($.size({ showFiles: true }))
	.pipe($.csso())
	.pipe($.size({ showFiles: true }))
	.pipe($.sourcemaps.write('map'))
	.pipe(gulp.dest( path.SCSS_DST ))
	.pipe(browserSync.stream({ match: '**/*.css' }))
=======
	HTML_SRC	: ['./css/*.css','./*.html','./_posts/*.*','./_layouts/*.*', './_includes/*.*'],
}

gulp.task('scss', function () {
	
	gulp.src( path.SCSS_SRC )
	    .pipe($.sass())
	    .pipe($.autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
	    .pipe($.size({ showFiles: true }))
	    .pipe($.csso())
	    .pipe($.size({ showFiles: true }))
	    .pipe($.sourcemaps.write('map'))
	    .pipe(gulp.dest( path.SCSS_DST ))
	    .pipe(browserSync.stream({ match: '**/*.css' }))
>>>>>>> 8d31ab6259eaaa7327886c745662032aa70a1f72
	;
	
});

gulp.task('jekyll', function () {
<<<<<<< HEAD
	require('child_process').exec('jekyll build --baseurl=', {stdio: 'inherit'});
=======
	require('child_process').exec('bundle exec jekyll build --baseurl=', {stdio: 'inherit'});
>>>>>>> 8d31ab6259eaaa7327886c745662032aa70a1f72
});

gulp.task('serve', function() {
	
	browserSync.init({
		server: {
			baseDir: "./docs/"
		}
	});
	
<<<<<<< HEAD
	gulp.watch(path.SCSS_SRC, ['sass']);
=======
	gulp.watch(path.SCSS_SRC, ['scss', 'jekyll']);
>>>>>>> 8d31ab6259eaaa7327886c745662032aa70a1f72
	gulp.watch(path.HTML_SRC, ['jekyll']);
	gulp.watch(path.HTML_SRC).on('change', browserSync.reload);
	
});

<<<<<<< HEAD
gulp.task('default', ['jekyll','serve']);
=======
gulp.task('default', ['scss','jekyll','serve']);
>>>>>>> 8d31ab6259eaaa7327886c745662032aa70a1f72
