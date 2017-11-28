$(document).ready(function () {
    tabs.init();
    modal.init();
    projects.init();
    search();
    switchActive('.projects-item', 'active');
    indexListeners();
    initRegForm();
})

const switchActive = function (selector, activeClass) {
    $(selector).on('click', function () {
        const $this = $(this);
        if (!$this.hasClass(activeClass)) {
            $this
                .addClass(activeClass)
                .siblings()
                .removeClass(activeClass);
        }
    })
}

const indexListeners = function () {
    $('#indexHelp').on('click', e => {
        e.preventDefault();
        modal.open('modalHelp')
    })
}