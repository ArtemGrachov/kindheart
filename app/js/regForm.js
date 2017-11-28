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
        const physValid = validation.init({
                id: 'physHelpForm',
                options: helpFormOptions('phys')
            }),
            jurValid = validation.init({
                id: 'jurHelpForm',
                options: helpFormOptions('jur')
            })
        autocompleteRegForm('phys', physValid);
        autocompleteRegForm('jur', jurValid);
    }
}

const autocompleteRegForm = function (prefix, validator) {
    const autoComplete = new google.maps.places.Autocomplete(document.getElementById(prefix + 'Address'));
    google.maps.event.addListener(autoComplete, 'place_changed', function () {
        const place = autoComplete.getPlace();
        console.log(place)
        let form = {};
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
                case 'route':
                    form.address = form.address ? component.long_name + form.address : component.long_name
                    break;
                case 'street_number':
                    form.address = form.address ? form.address + component.long_name : component.long_name
                    break;
            }
        })
        $('#' + prefix + 'Country').val(form.country);
        $('#' + prefix + 'Address').val(form.address);
        $('#' + prefix + 'District').val(form.district);
        $('#' + prefix + 'City').val(form.city);
        $('#' + prefix + 'PostalCode').val(form.postalCode);
        validator.validateInputs([prefix + 'Country', prefix + 'District', prefix + 'City', prefix + 'PostalCode', prefix + 'Address']);
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