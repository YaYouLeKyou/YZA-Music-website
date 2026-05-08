import gulp from 'gulp';

const noOpTask = (done) => done();
const loadTask = (modulePath, fallback = noOpTask) => {
  try {
    return require(modulePath);
  } catch (err) {
    return fallback;
  }
};

const styles = loadTask('./build/styles.js');
const scripts = loadTask('./build/scripts.js');
const svgs = loadTask('./build/svgs.js');
const serve = loadTask('./build/serve.js');
const watch = loadTask('./build/watch.js');
const copy = loadTask('./build/copy.js');
const { buildStyles = noOpTask, buildScripts = noOpTask } = loadTask('./build/build.js');

const compile = gulp.series(styles, scripts, svgs);
const main = gulp.series(copy, compile, serve, watch);
const build = gulp.series(copy, compile, buildStyles, buildScripts);

gulp.task('default', main);
gulp.task('compile', compile);
gulp.task('build', build);
gulp.task('copy', copy);
