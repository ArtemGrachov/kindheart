module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch($.cfg.app + 'scss/**/*.scss', ['sass']);
        $.gulp.watch($.cfg.app + 'img/', ['img', $.browserSync.reload]);
        $.gulp.watch($.cfg.app + 'sprite/', ['sprite', $.browserSync.reload]);
        $.gulp.watch($.cfg.app + 'pug/**/*.pug', ['pug', $.browserSync.reload]);
        $.gulp.watch($.cfg.app + 'js/**/*.js', ['scripts', $.browserSync.reload]);
    })
}