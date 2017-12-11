const modal = (function () {
    const modalAnimDur = 500;
    let scrolBarWidth = 0;
    return {
        init: function () {
            const _this = this;
            scrolBarWidth = getScrollBarWidth();
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
            modal.scrollTop(0);
            modal.find('.modal-wrap').css({
                'animation-name': 'modalOpen',
                'animation-duration': modalAnimDur + 'ms'
            })
            modal.css({
                'overflow-y': 'hidden',
                'padding-right': scrolBarWidth + 'px'
            })
            setTimeout(() => {
                modal.css({
                    'overflow-y': '',
                    'padding-right': ''
                })
            }, modalAnimDur)
            $('.wrapper').addClass('wrapper_blur');
        },
        close: function (modal) {
            modal.removeClass('active');
            $('.wrapper').removeClass('wrapper_blur');
            modal.css({
                'display': 'block',
                'padding-right': scrolBarWidth + 'px',
                'overflow-y': 'hidden'
            })
            modal.find('.modal-wrap').css({
                'animation-name': 'modalClose',
                'animation-duration': modalAnimDur * 0.8 + 'ms'
            })
            setTimeout(() => {
                modal.css({
                    'display': ''
                })
            }, modalAnimDur * 0.5)
        }
    }
})();