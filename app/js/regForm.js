const initRegForm = function () {
    const formModal = $('#modalHelpForm');
    if (formModal) {
        formModal.find('.form-file__input').each(function () {
            const $this = $(this);
            $this
                .siblings('.form-file__btn')
                .on('click', function (e) {
                    e.preventDefault();
                    $this.trigger('click');
                })
        })
        validation.init([{
            id: 'physHelpForm',
            options: helpFormOptions('phys')
        }, {
            id: 'jurHelpForm',
            options: helpFormOptions('jur')
        }]);
    }
    autocompleteRegForm('phys');
}

const autocompleteRegForm = function (prefix) {
    const autoComplete = new google.maps.places.Autocomplete(document.getElementById(prefix + 'Address'));
    google.maps.event.addListener(autoComplete, 'place_changed', function () {
        const place = autoComplete.getPlace();
        let form = {};
        console.log(place);
        autoComplete.getPlace().address_components.forEach(component => {
            switch (component.types[0]) {
                case 'country':
                    form.country = component.long_name
                    break;
                case 'locality':
                    form.city = component.long_name
                    break;
                case 'administrative_area_level_1':
                    form.district = component.long_name
                    break;
                case 'postal_code':
                    form.postalCode = component.long_name
                    break;
            }
        })
        $('#' + prefix + 'Country').val(form.country);
        $('#' + prefix + 'District').val(form.district);
        $('#' + prefix + 'City').val(form.city);
        $('#' + prefix + 'PostalCode').val(form.postalCode);
    })
}

const openRegForm = function (help) {
    const id = 'modalHelpForm';
    modal.open(id);
    const formModal = $('#' + id);
    formModal.find('.form-tabs').each(function () {
        tabs.setActive(
            $(this),
            help ? formModal.find(`#${help}Tab`).index() : 0
        );
    })
}