var source = 'src/';
var prodDest = 'out/prod/';
var devDest = 'out/dev/'

var bootstrapSass = { in: './node_modules/bootstrap/scss/' };

function getDest(env) {
    return ((env == 'prod') ? prodDest : devDest);    
}

exports.general = function (env) {
    return {
        dest: getDest(env)
    }
}

exports.sass = function(env) {
    return {
        src: source + 'scss/**/*.scss',
        dest: getDest(env) + 'css/',
        watch: source + 'scss/**/*',
        env: env,
        sassOpts: {
            outputStyle: ((env=='prod') ? 'compressed' : 'nested'),
            precison: 3,
            errLogToConsole: true,
            includePaths: [bootstrapSass.in]
        }
    };
}

exports.bootstrap_js = function(env) {
    return {
        src: ['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'],
        dest: getDest(env) + 'js/',
        watch: source + 'js/**/*.js',
        env: env
    };
}

exports.html = function(env) {
    return {
        src: source + "**/*.html",
        dest: getDest(env),
        watch: source + "**/*.html",
        env: env
    }
}

exports.fonts = function(env) {
    return {
        src: source + "fonts/**/*.*",
        dest: getDest(env) + "fonts/",
        watch: source + "fonts/**/*.*",
        env: env
    }
}

exports.js = function(env) {
    return {
        src: source + "**/*.js",
        dest: getDest(env),
        env: env
    }
}

exports.img = function (env) {
    return {
        src: source + "img/**/*.*",
        dest: getDest(env) + "img/",
        watch: source + "img/**/*.*",
        env: env
    }
}

exports.ts = function(env) {
    return {
        src: source + "**/*.ts",
        dest: getDest(env) + 'js/',
        watch: source + "**/*.ts",
        env: env,
        opts: {
            mode: env === 'prod'? "production" : 'development',
            devtool: env === 'prod'? '' : 'inline-source-map'
        }
    }
}