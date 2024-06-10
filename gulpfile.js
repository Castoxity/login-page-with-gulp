const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Serve files with live reload
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'login.html' // Set login.html as the default file
    }
  });

  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('css/*.css').on('change', browserSync.reload);
  gulp.watch('js/*.js').on('change', browserSync.reload);
});

// Default task
gulp.task('default', gulp.series('serve'));
