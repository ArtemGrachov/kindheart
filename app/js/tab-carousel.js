const tabCarousel = (function () {
    return {
        init: function (nav, tabs) {
            const _this = this;
            nav
                .find('li')
                .on('click', function (e) {
                    e.preventDefault();
                    _this.switchTab(nav, tabs, $(this).index());
                })
        },
        switchTab: function (nav, tabs, index) {
            tabs
                .children('li')
                .eq(index)
                .addClass('active')
                .siblings()
                .removeClass('active')
            nav
                .children('li')
                .eq(index)
                .addClass('active')
                .siblings()
                .removeClass('active')
            const wrapCenter = nav.parent().width() / 2;
            const activeHalfWidth = nav.children('.active').width() / 2;
            const activeNewLeftPos = wrapCenter - activeHalfWidth;
            console.log('wrapCenter', wrapCenter);
            console.log('activeHalfWidth', activeHalfWidth);
            console.log('activeNewLeftPos', activeNewLeftPos);
        },
        animation: (function () {
            return { in: function () {

                },
                out: function () {

                }
            }
        })()
    }
})()