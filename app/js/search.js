const search = function () {
    const $search = $('.search'),
        animDur = 500;
    $('.header-search').on('click', function () {
        $search.addClass('active');
        $search.css({
            'animation-name': 'searchOn',
            'animation-duration': `${animDur}ms`,
        })
    })
    $('.search__close').on('click', function () {
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
    })
};