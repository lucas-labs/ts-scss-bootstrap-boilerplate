// Task: sass
module.exports = function (gulp, plugins, config, browserSync) {
    return function () {
        var webpackConfig = require('../webpack.config');

        webpackConfig.mode = config.opts.mode;
        webpackConfig.devtool = config.opts.devtool;

        var stream = gulp.src('src/ts/**/*.ts')
            .pipe(plugins.webpack(webpackConfig, require("webpack")))
            .pipe(gulp.dest(config.dest));

        if(config.env != 'prod') {
            stream.pipe(browserSync.stream())
        }
        
        return stream;
    };
};