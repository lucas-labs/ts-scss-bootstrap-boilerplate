module.exports = function (gulp, plugins, config, browserSync) {
    return function () {
        var stream = gulp.src(config.src)
            .pipe(gulp.dest(config.dest))
            .pipe(browserSync.stream());
        
        return stream;
    };
};