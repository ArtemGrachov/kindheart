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
    modal.css({
        'display': 'block'
    })
    modal.find('.modal-wrap').css({
        'animation-name': 'modalClose',
        'animation-duration': modalAnimDur + 'ms'
    })
    setTimeout(() => {
        modal.css({
            display: ''
        })
    }, modalAnimDur - 50)
}