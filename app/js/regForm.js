const openRegForm = function (event, help) {
    openModal(event, 'modalFormPhys');
    const formModal = $('#modalFormPhys');
    tabs.setActive(
        formModal.find('.form-tabs'),
        formModal.find(`#${help}Tab`).index()
    );
}