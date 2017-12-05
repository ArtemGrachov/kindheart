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
                if (!tabsEls.navBtns.find('.active').length) {
                    tabsEls.navBtns.first().addClass('active');
                    tabsEls.tabPages.first().addClass('active');
                }
                tabsEls.navBtns.each(function () {
                    const $this = $(this);
                    $this.on('click', function (e) {
                        e.preventDefault();
                        if (!$this.hasClass('active')) {
                            _this.switchTab(tabsEls, $this.index());
                        }
                    })
                })
            })
        },
        switchTab: function (tabEls, index) {
            const activePage = tabEls.tabPages.filter('.active'),
                newPage = $(tabEls.tabPages.eq(index));
            activePage.finish();
            newPage.finish();
            $(tabEls.navBtns.eq(index))
                .addClass('active')
                .siblings()
                .removeClass('active');
            newPage
                .addClass('active')
                .siblings()
                .removeClass('active');
            const animSpeed = 200;
            activePage.css({
                'display': 'block'
            });
            newPage.css({
                'display': 'none'
            })
            activePage.fadeOut(animSpeed, () => {
                newPage.fadeIn(animSpeed);
                activePage.css({
                    'display': ''
                });
                newPage.css({
                    'display': ''
                });
            })
        },
        setActive: function (tabs, index) {
            const tabEls = getTabEls(tabs);
            $(tabEls.navBtns.eq(index))
                .addClass('active')
                .siblings()
                .removeClass('active');
            $(tabEls.tabPages.eq(index))
                .addClass('active')
                .siblings()
                .removeClass('active');
        }
    }
})()