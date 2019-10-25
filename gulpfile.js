const { src, dest, parallel, series } = require('gulp');
const DIST_DIR = 'dist';

const gulpClean = require('gulp-clean');

function clean() {
    return src(DIST_DIR)
        .pipe(gulpClean())
}

function css() {
    return src('LESSONS/**/*.css')
        .pipe(dest(`${ DIST_DIR }/css`))
}

exports.css = css;
exports.clean = clean;
const build = parallel(css);
exports.default = series(clean, build);