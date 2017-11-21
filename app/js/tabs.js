const tabs = (function () {
    return {
        init: function () {
            const _this = this;
            $('.tabs').each(function () {
                const tabs = $(this),
                    navBtns = tabs.find('.tabs-nav').find('li'),
                    tabPages = tabs.find('.tabs-list').find('li');

                navBtns.each(function () {
                    $(this).on('click', function (e) {
                        e.preventDefault();
                        _this.switchTab(navBtns, tabPages, $(this).index());
                    })
                })
            })
        },
        switchTab: function (navBtns, tabPages, index) {
            $(navBtns[index])
                .addClass('active')
                .siblings()
                .removeClass('active');
            $(tabPages[index])
                .addClass('active')
                .siblings()
                .removeClass('active')
        }
    }
})()