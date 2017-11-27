$(document).ready(function () {
    tabs.init();
    modal.init();
    projects.init();
    search();
    switchActive('.projects-item');
    indexListeners();

    validation.init([{
        id: 'physHelpForm',
        options: helpFormOptions('phys')
    }, {
        id: 'jurHelpForm',
        options: helpFormOptions('jur')
    }]);
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

const indexListeners = function () {
    $('#indexHelp').on('click', e => {
        e.preventDefault();
        modal.open('modalHelp')
    })
}