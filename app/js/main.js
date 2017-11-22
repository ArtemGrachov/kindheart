$(document).ready(function () {
    tabs.init();
    modal.init();
    projects.init();
    search();
    switchActive('.projects-item');
    indexListeners();
})

const switchActive = function (selector) {
    $(selector).on('click', function () {
        const $this = $(this);
        if (!$this.hasClass('active')) {
            $this
                .addClass('active')
                .siblings()
                .removeClass('active');
        }
    })
}
// ???
const indexListeners = function () {
    [{
            id: 'indexProjectDetails',
            modal: 'modalInfo'
        },
        {
            id: 'indexHelp',
            modal: 'modalHelp'
        },
        {
            id: 'indexAddProject',
            modal: 'modalInfo'
        }
    ].forEach(el => $(`#${el.id}`).on('click', e => modal.open(el.modal)))
}
// ???