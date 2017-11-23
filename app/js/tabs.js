const tabs = (function () {
    const getTabEls = function (tabs) {
        return {
            navBtns: tabs.find('.tabs-nav').first().children('li'),
            tabPages: tabs.find('.tabs-list').first().children('li')
        }
    }
    return {
        init: function () {
            const _this = this;
            $('.tabs').each(function () {
                const tabs = $(this),
                    tabsEls = getTabEls(tabs);
                tabsEls.navBtns.each(function () {
                    $(this).on('click', function (e) {
                        e.preventDefault();
                        _this.switchTab(tabsEls, $(this).index());
                    })
                })
            })
        },
        switchTab: function (tabEls, index) {
            const activePage = tabEls.tabPages.filter('.active'),
                newPage = $(tabEls.tabPages[index]);
            activePage.finish();
            newPage.finish();
            activePage.fadeOut(200, () => {
                newPage.fadeIn(200, () => {
                    activePage.removeAttr('style');
                    newPage.removeAttr('style');
                });
                $(tabEls.navBtns[index])
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
                newPage
                    .addClass('active')
                    .siblings()
                    .removeClass('active')
            })

        },
        setActive: function (tabs, index) {
            const tabEls = getTabEls(tabs);
            $(tabEls.navBtns[index])
                .addClass('active')
                .siblings()
                .removeClass('active');
            $(tabEls.tabPages[index])
                .addClass('active')
                .siblings()
                .removeClass('active');
        }
    }
})()