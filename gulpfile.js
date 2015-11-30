/*!
 * gulp
 * $ npm install gulp-minify-css gulp-uglify gulp-add-src gulp-concat gulp-notify gulp-rename --save-dev
 */

// load plugins
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    addsrc = require('gulp-add-src'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');


// styles:
gulp.task('styles', function () {
    return gulp.src([
        'asset/css/bootstrap.min.css',
        'css/font-awesome.min.css',
        'css/slicknav.css',
        'css/style.css',
        'css/responsive.css',
        'css/animate.css',
        'css/colors/jade.css'])
        .pipe(concat('viplaunch.css'))
        .pipe(minifycss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('css'))
        .pipe(notify({message: 'styles task complete'}));
});

// scripts:
gulp.task('scripts', function () {
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
        'js/jquery.easypiechart.js',
        'js/jquery.nicescroll.js',
        // 'js/jquery.parallax.js',
        'js/jquery.lazyload.js',
        // 'js/mediaelement-and-player.js',
        'js/jquery.slicknav.js',
        'js/script.js'])
        .pipe(concat('viplaunch.js'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('js'))
        .pipe(notify({message: 'scripts task complete'}));
});
