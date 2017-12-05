const modal = (function () {
    const modalAnimDur = 500;
    return {
        init: function () {
            const _this = this;
            $('.modal').on('click', function (e) {
                const target = $(e.target || e.srcElement);
                if (!target.closest('.modal-window').length) {
                    e.preventDefault();
                    _this.close($(target.closest('.modal')))
                }
            })
        },
        open: function (modalId) {
            const modal = $('#' + modalId);
            modal.addClass('active');
            modal.find('.modal-wrap').css({
                'animation-name': 'modalOpen',
                'animation-duration': modalAnimDur + 'ms'
            })
            $('.wrapper').addClass('wrapper_blur');
        },
        close: function (modal) {
            modal.removeClass('active');
            $('.wrapper').removeClass('wrapper_blur');
            modal.css({
                'display': 'block'
            })
            modal.find('.modal-wrap').css({
                'animation-name': 'modalClose',
                'animation-duration': modalAnimDur * 0.8 + 'ms'
            })
            setTimeout(() => {
                modal.css({
                    'display': '',
                    'animation-name': '',
                    'animation-duration': ''
                })
            }, modalAnimDur * 0.8)
        }
    }
})();