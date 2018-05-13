// Task: serve
module.exports = function (gulp, plugins, config, browserSync) {
    return function () {
        browserSync.init({
            server: config.dest
        });
    };
};