// Task: sass
module.exports = function (gulp, plugins, config, browserSync) {
    return function () {

        var stream = gulp.src(config.src)
            .pipe(plugins.wait(500))
            .pipe(plugins.sass(config.sassOpts))
            .pipe(gulp.dest(config.dest));
        
        if(config.env != 'prod') {
            stream.pipe(browserSync.stream())
        }
        
        return stream;
    };
};