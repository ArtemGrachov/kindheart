module.exports = function () {
    $.gulp.task('scripts', function () {
        return $.gulp.src($.cfg.app + 'js/**.*js')
            .pipe($.gp.babel({
                presets: ['env']
            }).on('error',
                function (err) {
                    $.errHdl(this, err)
                }
            ))
            .pipe($.gp.concat('main.js'))
            .pipe($.gp.uglify())
            .pipe($.gulp.dest($.cfg.dist + 'js'))
    })
}