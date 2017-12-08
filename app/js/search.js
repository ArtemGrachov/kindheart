const search = function () {
    const $search = $('.search'),
        animDur = 500,
        closeSearch = function () {
            $search.removeClass('active');
            $search.css({
                'display': 'block',
                'animation-name': 'searchOff',
                'animation-duration': `${animDur}ms`,
            })
            setTimeout(() => {
                $search.css({
                    'display': '',
                    'animation-name': '',
                    'animation-duration': '',
                    'animation-direction': ''
                })
            }, animDur * .9)
        }
    let bindings = [];
    $('.header-search__toggle').on('click', function (e) {
        e.preventDefault();
        $search.addClass('active');
        $search.css({
            'animation-name': 'searchOn',
            'animation-duration': `${animDur}ms`,
        });
        setTimeout(() => {
            bindings.push(outsideClick.addListener('.search', function () {
                closeSearch();
                bindings.forEach(bind => outsideClick.removeListener(bind))
            }));
        }, 0)
    });
    $('.search__close').on('click', closeSearch);
};