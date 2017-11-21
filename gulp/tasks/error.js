exports.default = function (that, err) {
    console.error(err.toString());
    that.emit('end');
}