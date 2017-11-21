module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src($.cfg.app + 'pug/pages/**/*.pug')
            .pipe($.gp.pug().on('error',
                function (err) {
                    $.errHdl(this, err)
                }
            ))
            .pipe($.gp.htmlBeautify())
            .pipe($.gulp.dest($.cfg.dist))
    })
}