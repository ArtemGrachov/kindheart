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
        }
    return {
        init: function () {
            filter.init();
            initItemModal();
            initItemDetails();
            $('.projects').each(function () {
                const $this = $(this),
                    nav = $this.find('.projects-carousel'),
                    tabs = $this.find('.projects-categories');
                tabCarousel.init(nav, tabs);
            })
        }
    }
})()