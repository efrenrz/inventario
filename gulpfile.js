var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('livereload', function() {
  livereload({start: true});

  var livereloadPage = function() {
    // Reload the whole page
    livereload.reload();
  };

  gulp.watch('resources/views/**/*.blade.php', livereloadPage);
  gulp.watch('resources/lang/**/*.php', livereloadPage);
});

gulp.task('default', ['livereload']);