module.exports = function (gulp, plugins, config, browserSync) {
    return function () {
        var stream = gulp.src(config.src)
            .pipe(gulp.dest(config.dest));

        if(config.env != 'prod') {
            stream.pipe(browserSync.stream())
        }
        
        return stream;
    };
};