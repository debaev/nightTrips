var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require("gulp-rename");
var watch = require('gulp-watch');
var gcmq = require('gulp-group-css-media-queries');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');

var babel = require('gulp-babel');
var ttf2woff2 = require('gulp-ttf2woff2');
var webp = require('gulp-webp');
 

gulp.task('font', function(){
  return gulp.src(['./app/fonts/fontsOfNightTrips/*.ttf'])
    .pipe(ttf2woff2())
    .pipe(gulp.dest('./app/fonts/compiledFont/'));
});


function js() {
    return gulp.src([
        'app/prejs/index.js'
    ])
    .pipe(babel({ presets: [
        '@babel/preset-env', ['minify', {
            "builtIns" : false
        }]]}))
    .pipe(gulp.dest('./app/js/'))
}

function style(){
    return gulp.src('./app/precss/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(gcmq())
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./app/css/'))
    .pipe(csso())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(browserSync.stream())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/css/'))
}


gulp.task('watch', function(){
    watch('./app/precss/style.scss', style);
    watch('./app/index.html', browserSync.reload);
    watch('./app/js/script.js', browserSync.reload);
});

gulp.task('sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('style', style);
gulp.task('js', js);

gulp.task('imagemin', function(){
    return gulp.src('./app/img-original/*.*')
    .pipe(webp(imagemin()))
    .pipe(gulp.dest('./app/img/'))
})

gulp.task('default', gulp.parallel('watch', 'sync', 'font', 'style','js', 'imagemin'));