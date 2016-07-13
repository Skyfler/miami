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
    uglify = require('gulp-uglify'),
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
        img: './public/img/',
        pie: './public/pie/'
    },
    dev: { //Пути откуда брать исходники
        html: './dev/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: './dev/scripts/page.js',//В стилях и скриптах нам понадобятся только main файлы
        jsie: './dev/scripts/ie/*',
        css: './dev/css/*.css',
        img: './dev/img/used/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        pie: './dev/pie/*'
    },
    clean: './public'
};

gulp.task('webpack', function() {
    gulp.src(path.dev.js)
        .pipe(gulpWebpack({
            output: {
                filename: "build.min.js"
            },
            plugins: [
                new webpack.optimize.UglifyJsPlugin({minimize: true})
            ]
        }, webpack))
        .pipe(gulp.dest(path.public.js));
});

gulp.task('jsIe', function () {
    gulp.src(path.dev.jsie)
        .pipe(uglify())
        .pipe(gulp.dest(path.public.js));
});

gulp.task('js', ['webpack', 'jsIe']);

gulp.task('css', function () {
    gulp.src(path.dev.css)
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.public.css));

});

gulp.task('image', function () {
    gulp.src(path.dev.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(path.public.img));
});

gulp.task('pie', function () {
    gulp.src(path.dev.pie)
        .pipe(gulp.dest(path.public.pie));
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

gulp.task('default', ['html', 'css', 'js', 'pie', 'image']);