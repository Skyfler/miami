var gulp = require('gulp'), 
    webpack = require('webpack'), 
    gulpWebpack = require('webpack-stream'),
    cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    fileinclude = require('gulp-file-include'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename');

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

gulp.task('minifyCss', function () {
    gulp.src('./dev/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/css/'));
});

/*gulp.task('image', function () {
    return gulp.src('./new/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./new'));
});*/

gulp.task('concatHtml', function() {
    gulp.src([
        './dev/templates/index.html',
        './dev/templates/about_us.html',
        './dev/templates/med.html',
        './dev/templates/services.html',
        './dev/templates/prices.html',
        './dev/templates/important.html',
        './dev/templates/contacts.html',
        './dev/templates/article.html'
    ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            processConditionalComments: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['concatHtml', 'minifyCss', 'webpack']);