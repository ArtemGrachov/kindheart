const tabCarousel = (function () {
    return {
        init: function (carousel) {
            const _this = this;
            carousel.wrap.css({
                'position': 'relative',
                'height': carousel.wrap.height(),

            })
            carousel.nav.css({
                'position': 'absolute',
                'top': '0',
                'left': '0',
                'width': '100%'
            })
            carousel
                .nav
                .find('li')
                .on('click', function (e) {
                    e.preventDefault();
                    _this.switchTab(carousel, $(this).index());
                })
        },
        switchTab: function (carousel, index) {

            const _this = this;
            carousel.tabs
                .children('li')
                .eq(index)
                .addClass('active')
                .siblings()
                .removeClass('active')
            carousel.nav
                .children('li')
                .eq(index)
                .addClass('active')
                .siblings()
                .removeClass('active')

            _this.animation.move(carousel, carousel.nav.children('.active'));
        },
        animation: (function () {
            return { in: function () {

                },
                out: function () {

                },
                move: function (carousel, active) {
                    const move = (carousel.wrap.width() / 2 - active.width() / 2) - active.offset().left;
                    console.log(carousel.nav.offset().left + move + 'px')
                    carousel.nav.animate({
                        'left': carousel.nav.offset().left + move + 'px'
                    }, 1500)
                }
            }
        })()
    }
})()