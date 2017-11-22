const projects = (function () {
    const initFilter = function () {
            const slideSpeed = 300
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
                    .slideUp(slideSpeed / 2, function () {
                        $projectsFilter.removeClass('active');
                        $(this).removeAttr('style');
                    })
            })
        },
        initItemModal = function () {
            $('.projects-help__link').on('click', function (e) {
                e.preventDefault();
                openRegForm($(this).attr('data-tab-open'))
            })
        },
        initItemDetails = function () {
            $('.projects-meta-details').on('click', function (e) {
                e.preventDefault();
                modal.open('modalInfo');
            })
        }
    return {
        init: function () {
            initFilter();
            initItemModal();
            initItemDetails();
        }
    }
})()