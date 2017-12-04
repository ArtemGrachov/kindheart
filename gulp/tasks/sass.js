module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src($.cfg.app + 'scss/main.scss')
            .pipe($.gp.sass().on('error',
                function (err) {
                    $.errHdl(this, err);
                }
            ))
            .pipe($.gp.autoprefixer())
            .pipe($.gp.cssbeautify())
            // .pipe($.gp.cssmin())
            .pipe($.gulp.dest($.cfg.dist + 'css'))
            .pipe($.browserSync.reload({
                stream: true
            }))
    })
}