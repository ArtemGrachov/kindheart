const projectsFilter = function () {
    const slideSpeed = 300;
    $('.projects-filter__toggle').on('click', function () {
        const $projectsFilter = $(this).closest('.projects-filter');
        $projectsFilter.find('.projects-filter-dropdown')
            .slideDown(slideSpeed, function () {
                $projectsFilter.addClass('active');
                $(this).removeAttr('style');
            });
    })
    $('.projects-filter__btn').on('click', function () {
        const $projectsFilter = $(this).closest('.projects-filter');
        $projectsFilter.find('.projects-filter-dropdown')
            .slideUp(slideSpeed, function () {
                $projectsFilter.removeClass('active');
                $(this).removeAttr('style');
            })
    })
}