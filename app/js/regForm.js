const openRegForm = function (help) {
    const id = 'modalHelpForm';
    modal.open(id);
    const formModal = $('#' + id);
    formModal.find('.form-file__input').each(function () {
        const $this = $(this);
        $this
            .siblings('.form-file__btn')
            .on('click', function (e) {
                e.preventDefault();
                $this.trigger('click');
            })

    })
    formModal.find('.form-tabs').each(function () {
        tabs.setActive(
            $(this),
            help ? formModal.find(`#${help}Tab`).index() : 0
        );
    })
}