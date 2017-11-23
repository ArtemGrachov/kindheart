module.exports = function () {
    $.gulp.task('js-libs', function () {
        return $.gulp.src($.path.jsLibs.map(path => 'node_modules/' + path))
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest($.cfg.dist + '/js'))
    })
}