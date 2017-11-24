const projects = (function () {
    const filter = (function () {
            const slideSpeed = 300;
            const clickBindings = [];
            return {
                init: function () {
                    const _this = this;
                    $('.projects-filter__toggle').on('click', function (e) {
                        e.preventDefault();
                        if ($(this).closest('.projects-filter').hasClass('active')) {
                            _this.close($(this).closest('.projects-filter'));

                        } else {
                            _this.open($(this).closest('.projects-filter'));

                        }
                    })
                    $('.projects-filter__btn').on('click', function (e) {
                        e.preventDefault();
                        _this.close($(this).closest('.projects-filter'));
                    })
                },
                addClickListener: function () {
                    const _this = this;
                    clickBindings.push(
                        $(window).on('click', function (e) {
                            if (!e.target.closest('.projects-filter')) {
                                $('.projects-filter').each(function () {
                                    _this.close($(this))
                                })
                            }
                        }))
                },
                removeClickListener: function () {
                    clickBindings.forEach(bind => {
                        bind.unbind();
                    })
                },
                open: function (filter) {
                    const _this = this;
                    filter
                        .find('.projects-filter-dropdown')
                        .slideDown(slideSpeed, function () {
                            filter.addClass('active');
                            $(this).removeAttr('style');
                            _this.addClickListener();
                        });
                },
                close: function (filter) {
                    const _this = this;
                    filter.find('.projects-filter-dropdown')
                        .slideUp(slideSpeed / 2, function () {
                            filter.removeClass('active');
                            $(this).removeAttr('style');
                            _this.removeClickListener();
                        })
                }
            }
        })(),
        initItemModal = function () {
            $('.projects-help__link').on('click', function (e) {
                e.preventDefault();
                openRegForm($(this).attr('data-tab-open'))
            })
        },
        initItemDetails = function () {
            $('.projects-meta-details').on('click', function (e) {
                e.preventDefault();
                modal.open('modalInfo');
            })
        },
        tabsCarousel = (function () {
            let options;
            return {
                init: function (initOptions) {
                    const _this = this;
                    options = initOptions;
                    $(options.group)
                        .each(function () {
                            const $list = $(this),
                                $carousel = $list.find(options.nav.wrap);
                            $carousel.flickity({
                                freeScroll: true,
                                prevNextButtons: false,
                                pageDots: false,
                                initialIndex: options.index
                            })
                            const tabs = $list.find(options.tabs),
                                nav = $carousel.find(options.nav.item);
                            _this.setActive(nav, tabs, options.index, options.activeClass)
                            nav.on('click', function () {
                                const $this = $(this),
                                    index = $(this).index();
                                _this.toggleNav($carousel, nav, index);
                                _this.toggleTab(tabs, index);
                            })
                        })
                },
                setActive: function (nav, tabs, index, ) {
                    nav
                        .removeClass(options.activeClass)
                    nav
                        .eq(index)
                        .addClass(options.activeClass);
                    tabs
                        .removeClass(options.activeClass)
                        .eq(index)
                        .addClass(options.activeClass)
                },
                toggleNav: function (carousel, nav, index) {
                    nav
                        .removeClass(options.activeClass);
                    nav
                        .eq(index)
                        .addClass(options.activeClass);
                    carousel
                        .flickity('select', index);
                },
                toggleTab: function (tabs, index) {
                    const animationDur = 300,
                        activeTab = tabs.filter('.active');
                    activeTab.css({
                        'animation-name': 'projectsOut',
                        'animation-duration': animationDur + 'ms'
                    })
                    setTimeout(() => {
                        activeTab.css({
                            'animation-name': '',
                            'animation-duration': ''
                        })
                        tabs
                            .removeClass(options.activeClass)
                        tabs
                            .eq(index)
                            .addClass(options.activeClass)
                            .css({
                                'animation-name': 'projectsIn',
                                'animation-duration': animationDur + 'ms'
                            })
                    }, animationDur * 0.9)
                }
            }
        })()
    return {
        init: function () {
            filter.init();
            initItemModal();
            initItemDetails();
            tabsCarousel.init({
                group: '.projects',
                nav: {
                    wrap: '.projects-carousel',
                    item: '.projects-carousel-item'
                },
                tabs: '.projects-categories > li',
                activeClass: 'active',
                index: 2
            });
        }
    }
})()