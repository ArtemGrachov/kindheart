global.$ = {
    gulp: require('gulp'),
    cfg: require('./gulp/config'),
    path: {
        task: require('./gulp/path/tasks'),
        jsLibs: require('./gulp/path/js-libs'),
        cssLibs: require('./gulp/path/css-libs')
    },
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    del: require('del'),
    errHdl: require('./gulp/tasks/error').default
}

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', [
    'clean',
    'sass',
    'pug',
    'css-libs',
    'scripts',
    'js-libs',
    'fonts',
    'img',
    // 'browser-sync',
    'watch'
])