var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('livereload',function(){
   gulp.src('*').pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('*.html',['livereload']);
    gulp.watch('*.js',['livereload']);
    gulp.watch('*.css',['livereload']);
});

gulp.task('default',['livereload','watch']);