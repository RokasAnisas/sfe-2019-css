const { src, dest, parallel, series } = require('gulp');
const DIST_DIR = 'dist';

const gulpClean = require('gulp-clean');
const cssConcat = require('gulp-concat-css');
const csso = require('gulp-csso');

function clean() {
    return src(DIST_DIR)
        .pipe(gulpClean())
}

function css() {
    return src(['home/*.css','LESSONS/**/*.css'])
        .pipe(cssConcat('styles.min.css'))
        .pipe(csso())
        .pipe(dest(DIST_DIR))
}

exports.css = css;
exports.clean = clean;
const build = parallel(css);
exports.default = series(clean, build);