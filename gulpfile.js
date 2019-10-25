const { src, dest, parallel, series, watch } = require('gulp');
const DIST_DIR = 'dist';
const SRC_DIR = 'src';

const gulpClean = require('gulp-clean');
const cssConcat = require('gulp-concat-css');
const csso = require('gulp-csso');
const browserSync = require('browser-sync').create();

function clean() {
    return src(DIST_DIR)
        .pipe(gulpClean())
}

function css() {
    return src([`${SRC_DIR}/home/*.css`, `${SRC_DIR}/LESSONS/**/*.css`])
        .pipe(cssConcat('styles.min.css'))
        .pipe(csso())
        .pipe(dest(DIST_DIR))
}

function html() {
    return src(`${SRC_DIR}/home/index.html`)
        .pipe(dest(DIST_DIR))
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    watch(SRC_DIR).on('change', build);
    watch(DIST_DIR).on('change', browserSync.reload);
}


exports.css = css;
exports.clean = clean;
exports.serve = serve;
exports.html = html;

const build = parallel(html, css);

exports.dev = series(clean, build, serve);
exports.default = series(clean, build);
