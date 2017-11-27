const openRegForm = function (help) {
    const id = 'modalHelpForm';
    modal.open(id);
    const formModal = $('#' + id);

    formModal.find('.form-tabs').each(function () {

        tabs.setActive(
            $(this),
            help ? formModal.find(`#${help}Tab`).index() : 0
        );
    })
}