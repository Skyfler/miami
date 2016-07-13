var gulp = require('gulp'), 
    webpack = require('webpack'), 
    gulpWebpack = require('webpack-stream'),
    cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    fileinclude = require('gulp-file-include'),
    htmlmin = require('gulp-htmlmin'),
    browserSync = require("browser-sync"),
    rimraf = require('rimraf'),
    rename = require('gulp-rename');

var config = {
    server: {
        baseDir: "./public"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Skyfler"
};

var path = {
    public: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: './public/',
        js: './public/scripts/',
        css: './public/css/',
        img: './public/img/'
    },
    dev: { //Пути откуда брать исходники
        html: './dev/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: './dev/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        style: './dev/css/style.css',
        img: './dev/img/used/**/*.*' //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
    },
    clean: './public'
};

gulp.task('webpack', function() {
    return gulp.src('./dev/scripts/page.js')
        .pipe(gulpWebpack({
            output: {
                filename: "build.min.js"
            },
            plugins: [
                new webpack.optimize.UglifyJsPlugin({minimize: true})
            ]
        }, webpack))
        .pipe(gulp.dest('./public/scripts/'));
});

gulp.task('css', function () {
    gulp.src('./dev/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('image', function () {
    return gulp.src(path.dev.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(path.public.img));
});

gulp.task('html', function() {
    gulp.src(path.dev.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            processConditionalComments: true,
            removeComments: true
        }))
        .pipe(gulp.dest(path.public.html));
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['html', 'css', 'webpack', 'image']);