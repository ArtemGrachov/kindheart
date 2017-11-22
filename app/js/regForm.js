const openRegForm = function (help) {
    modal.open('modalFormPhys');
    const formModal = $('#modalFormPhys');
    tabs.setActive(
        formModal.find('.form-tabs'),
        help ? formModal.find(`#${help}Tab`).index() : 0
    );
}