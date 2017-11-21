$(document).ready(function () {
    tabs.init();
    search();
    switchActive('.projects-item');
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