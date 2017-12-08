const outsideClick = (function () {
    return {
        addListener: function (wrapperSelectors, callback) {
            return $(window).on('click', function (e) {
                if (!(e.target || e.srcElement).closest(wrapperSelectors)) {
                    callback();
                }
            })
        },
        removeListener: function (listener) {
            listener.unbind();
        }
    }
})()