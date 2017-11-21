$(document).ready(function () {
    tabs.init();
    toggleActive('.projects-item');
})

const toggleActive = function (selector) {
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