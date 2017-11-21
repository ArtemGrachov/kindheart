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
            const activePage = tabPages.filter('.active'),
                newPage = $(tabPages[index]);
            activePage.finish();
            newPage.finish();
            activePage.fadeOut(200, () => {
                newPage.fadeIn();
                $(navBtns[index])
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
                newPage
                    .addClass('active')
                    .siblings()
                    .removeClass('active')
            })

        }
    }
})()