module.exports = function (gulp, plugins, config, browserSync) {
    return function () {
        var stream = gulp.src(config.src)
            //.pipe(plugins.imagemin({verbose: true}))
            .pipe(gulp.dest(config.dest));
        
        if(config.env != 'prod') {
            stream.pipe(browserSync.stream())
        }

        return stream;
    };
};