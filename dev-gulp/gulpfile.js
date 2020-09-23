var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    reload = require('browser-sync').reload(),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    changed = require('gulp-changed'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    lineec = require('gulp-line-ending-corrector');

 

var root = '../project/',
    scss = root + 'sass/',
    js = root + 'src/js/',
    jsdist = root + 'dist/js/';
    dist = root + 'dist/';

var styleWatchFiles = scss + '**/*.scss';

var cssSRC = [
    root + 'style.css'
];

var jsSRC = [
    js + 'jquery.js',
    js + 'jquery.validate.js',
    js + 'tabs.js',
    js + 'form.js',
    js + 'cancel.js',
];

function css(){
    return gulp.src([scss + 'style.scss'])
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.write())
        .pipe(lineec())
        .pipe(gulp.dest(root));
}

function concatCSS(){
    return gulp.src(cssSRC)
        .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(lineec())
        .pipe(gulp.dest(dist));
}

function javascript() {
    return gulp.src(jsSRC)
               .pipe(concat('rgsu.min.js'))
               .pipe(babel({
                presets: ['@babel/env']
                }))
               .pipe(uglify())
               .pipe(lineec())
               .pipe(gulp.dest(jsdist));
}


function watch(){
    browserSync.init({
        open: 'external',
        server: '/home/tapir/rgsu-test/project/dist'
    });
    gulp.watch(styleWatchFiles, gulp.series([css, concatCSS]));
    gulp.watch(jsSRC, javascript);
    gulp.watch([jsdist + 'rgsu.min.js', dist + 'style.min.css']).on('change', browserSync.reload);
}


exports.css = css;
exports.concatCSS = concatCSS;
exports.javascript = javascript;
exports.watch = watch;

var build = gulp.parallel(watch);
gulp.task('default', build);
