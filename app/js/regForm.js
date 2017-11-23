const openRegForm = function (help) {
    const id = 'modalHelpForm';
    modal.open(id);
    const formModal = $('#' + id);
    tabs.setActive(
        formModal.find('.form-tabs'),
        help ? formModal.find(`#${help}Tab`).index() : 0
    );
}