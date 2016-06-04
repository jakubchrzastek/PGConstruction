var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var connect = require('gulp-connect');

gulp.task('less', function(){

	return gulp.src('./app/less/style.less')
	.pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
	.pipe(gulp.dest('./app/css/'));
});

gulp.task("css", function () {
  gulp.src("./app/css/style.css")
    .pipe(connect.reload());
});

gulp.task("connect", function() {
  connect.server({
    root: "app",
    livereload: true
  });
});

gulp.task("index", function () {
  gulp.src("./app/index.html")
    .pipe(connect.reload());
});

gulp.task("oferta", function () {
  gulp.src("./app/oferta.html")
    .pipe(connect.reload());
});

gulp.task("ofirmie", function () {
  gulp.src("./app/ofirmie.html")
    .pipe(connect.reload());
});

gulp.task("cennik", function () {
  gulp.src("./app/cennik.html")
    .pipe(connect.reload());
});


gulp.task("kontakt", function () {
  gulp.src("./app/kontakt.html")
    .pipe(connect.reload());
});

gulp.task('watch', function(){

	gulp.watch("./app/less/*.less", ['less']);
	gulp.watch("./app/css/style.css", ['css']);
	gulp.watch("./app/index.html", ['index']);
	gulp.watch("./app/oferta.html", ['oferta']);
	gulp.watch("./app/ofirmie.html", ['ofirmie']);
	gulp.watch("./app/cennik.html", ['cennik']);
	gulp.watch("./app/kontakt.html", ['kontakt']);
})

gulp.task('default', ['connect', 'less', 'css', 'watch']);
