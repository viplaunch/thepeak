/*!
 * gulp
 * $ npm install gulp-minify-css gulp-uglify gulp-add-src gulp-concat gulp-notify gulp-rename gulp-sitemap --save-dev
 */

// load plugins
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uncss = require('gulp-uncss'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    sitemap = require('gulp-sitemap');


// styles:
gulp.task('style-clean', function () {
    return gulp.src([
        'asset/css/bootstrap.min.css',
        'css/font-awesome.min.css',
        'css/slicknav.css',
        'css/style.css',
        'css/responsive.css',
        'css/animate.css',
        'css/colors/jade.css'])
        .pipe(concat('viplaunch.css'))
        .pipe(uncss({
            html: ['**/index.html', 'http://thepeak.viplaunch.sg']
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('css'))
        .pipe(notify({message: 'style-clean task complete'}));
});

gulp.task('style-minify', function () {
    return gulp.src(['css/viplaunch.min.css'])
        .pipe(minifycss())
        .pipe(gulp.dest('css'))
        .pipe(notify({message: 'style-minify task complete'}));
});

// script
gulp.task('script', function () {
    return gulp.src([
        'js/jquery-2.1.4.js',
        'js/jquery.migrate.js',
        'js/modernizrr.js',
        'asset/js/bootstrap.js',
        'js/jquery.fitvids.js',
        'js/owl.carousel.js',
        'js/nivo-lightbox.js',
        'js/jquery.isotope.js',
        'js/jquery.appear.js',
        'js/count-to.js',
        'js/jquery.textillate.js',
        'js/jquery.lettering.js',
        'js/jquery.nicescroll.js',
        'js/jquery.lazyload.js',
         'js/jquery.slicknav.js',
        // 'js/jquery.easypiechart.js',
        // 'js/jquery.parallax.js',
        // 'js/mediaelement-and-player.js',
        'js/script.js'])
        .pipe(concat('viplaunch.js'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('js'))
        .pipe(notify({message: 'script task complete'}));
});

// sitemap
gulp.task('sitemap', function () {
    gulp.src('**/index.html')
        .pipe(sitemap({
            siteUrl: 'http://thepeak.viplaunch.sg',
            changefeq: 'daily'
        }))
        .pipe(gulp.dest('./'))
        .pipe(notify({message: 'sitemap task complete'}));;
});

