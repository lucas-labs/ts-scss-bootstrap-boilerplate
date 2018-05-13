var gulp = require('gulp');
var log = require('fancy-log');
var plugins = require('gulp-load-plugins')()
var browserSync = require('browser-sync').create();
var options = require('./tasks/modules/options');
plugins.webpack = require('webpack-stream');


const DEV = 'dev';
const PROD = 'prod';

function getTask(task, options) {
    return require('./tasks/' + task)(gulp, plugins, options, browserSync);
}

function build() {
    var copyHtmlFilesTask = getTask('copy-files-to-out', options.html(PROD));
    var copyFontsTask = getTask('copy-files-to-out', options.fonts(PROD));
    var processJs = getTask('process-js', options.js(PROD));
    var sassTask = getTask('sass', options.sass(PROD));
    var imgTask = getTask('process-img', options.img(PROD));
    var compileTs = getTask('compile-ts', options.ts(PROD));

    log("Generating HTML files");
    copyHtmlFilesTask();

    log("Copying fonts");
    copyFontsTask();

    log("Generating JS files");
    processJs();

    log("Compiling SASS and minifying CSS output");
    sassTask();

    log("Processing and optimizing images");
    imgTask();

    log("Compiling and bundling ts files");
    compileTs();
}

/* Build task */
gulp.task('build', build);

/* Tasks */
var sassTask = getTask('sass', options.sass(DEV));
gulp.task('sass', sassTask);

var copyJsTask = getTask('copy-bootstrap-js', options.bootstrap_js(DEV));
gulp.task('js:bootstrap', copyJsTask);

var processJs = getTask('process-js', options.js(DEV));
gulp.task('js', processJs);

var copyHtmlFilesTask = getTask('copy-files-to-out', options.html(DEV));
gulp.task('html', copyHtmlFilesTask);

var imgTask = getTask('process-img', options.img(DEV));
gulp.task('img', imgTask);

var copyFontsTask = getTask('copy-files-to-out', options.fonts(DEV));
gulp.task('fonts', copyFontsTask);

var compileTs = getTask('compile-ts', options.ts(DEV));
gulp.task('compilets', compileTs);

gulp.task('build:dev', ['sass', 'js', 'html', 'img', 'fonts', 'compilets']);

var initBrowserSyncTask = getTask('init-browser-sync', options.general(DEV));
gulp.task('serve', ['sass', 'js', 'html', 'img', 'fonts', 'compilets'], function() {
    log('Iniciando servidor BrowserSync');
    initBrowserSyncTask();
    
    gulp.watch(options.sass(DEV).watch, ['sass']);
    gulp.watch(options.js(DEV).watch, ['js']);
    gulp.watch(options.html(DEV).watch, ['html']);
    gulp.watch(options.img(DEV).watch, ['img']);
    gulp.watch(options.fonts(DEV).watch, ['fonts']);
    gulp.watch(options.ts(DEV).watch, ['compilets']);
});

gulp.task('default', ['serve']);