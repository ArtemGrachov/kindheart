const modalAnimDur = 500;

const openModal = function (event, modalId) {
    event.preventDefault();
    const modal = $('#' + modalId);
    modal.addClass('active');
    modal.find('.modal-wrap').css({
        'animation-name': 'modalOpen',
        'animation-duration': modalAnimDur + 'ms'
    })
    $('.wrapper').addClass('wrapper_blur');
}

const closeModal = function (event) {
    event.preventDefault();
    const modal = $(event.target.closest('.modal'));
    modal.removeClass('active');
    $('.wrapper').removeClass('wrapper_blur');
    modal.css({
        'display': 'block'
    })
    modal.find('.modal-wrap').css({
        'animation-name': 'modalClose',
        'animation-duration': modalAnimDur * 0.8 + 'ms'
    })
    setTimeout(() => {
        modal.css({
            'display': '',
            'animation-name': '',
            'animation-duration': ''
        })
    }, modalAnimDur * 0.8 - 100)
}