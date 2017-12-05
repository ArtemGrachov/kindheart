module.exports = function () {
    $.gulp.task('css-sprite', function () {
        return $.gulp.src($.cfg.app + 'sprites/**/*.svg')
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gp.svgCss({
                fileName: '_generated',
                cssPrefix: 'icon-',
                addSize: false,
                fileExt: 'scss'
            }))
            .pipe($.gulp.dest($.cfg.app + 'scss/sprites/'))
    })
}