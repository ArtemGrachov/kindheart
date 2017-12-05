const initRegForm = function () {
    const formModal = $('#modalHelpForm');
    if (formModal.length) {
        const cardInputOptions = function (prefix) {
            const cardGroup = $('#' + prefix + 'HelpForm').find('.form-card-group');
            return {
                numberWrap: cardGroup,
                numberInput: cardGroup.find('#' + prefix + 'CardNumber'),
                numberMasks: cardGroup.find('.form-card__number'),
                numberMaskSelector: '.form-card__number',
                numberFocusClass: 'card-focus'
            }
        }
        formModal.find('.form-file__input').each(function () {
            const $this = $(this);
            $this
                .siblings('.form-file__btn')
                .on('click', function (e) {
                    e.preventDefault();
                    $this.trigger('click');
                })
        })
        const physValidator = validation.init({
                id: 'physHelpForm',
                options: helpFormOptions('phys')
            }),
            jurValidator = validation.init({
                id: 'jurHelpForm',
                options: helpFormOptions('jur')
            })
        autocompleteRegForm('phys', physValidator);
        autocompleteRegForm('jur', jurValidator);
        cardInput(cardInputOptions('jur'), () => jurValidator.validateInput('jurCardNumber'))
        cardInput(cardInputOptions('phys'), () => physValidator.validateInput('physCardNumber'))
        $('#jurHelpForm').submit(function (e) {
            e.preventDefault();
            if (jurValidator.validateForm()) {
                console.log('Form is valid');
                jurValidator.submitBtn.attr('disabled', true)
            } else {
                console.log('Form is invalid');
            }
            console.log($(this).serializeArray());
        })
        $('#physHelpForm').submit(function (e) {
            e.preventDefault();
            if (physValidator.validateForm()) {
                console.log('Form is valid');
                physValidator.submitBtn.attr('disabled', true)
            } else {
                console.log('Form is invalid');
            }
            console.log($(this).serializeArray());
        })
        $('#physPhone').mask('(000) 000-00-00');
        $('#jurPhone').mask('(000) 000-00-00');
        $('#physCardExpiration').mask('00/0000');
        $('#jurCardExpiration').mask('00/0000');
        const toggleActiveFieldset = function (tabs, index) {
            tabs
                .find('.form-tabs-fieldset')
                .attr('disabled', true);
            tabs
                .find('.form-tabs-fieldset')
                .eq(index)
                .attr('disabled', false);
        }
        formModal.find('.form-tabs').each(function () {
            const $this = $(this);
            toggleActiveFieldset($this, $this.find('.form-tabs-btns>.active').index());
            $this
                .find('.form-tabs-btns>li')
                .on('click', function () {
                    toggleActiveFieldset($this, $(this).index())
                    const activeFormId = $(this).closest('form').attr('id'),
                        validatorIndex = activeFormId.slice(0, activeFormId.indexOf('HelpForm'));
                    eval(validatorIndex + 'Validator').submitAccess();
                })
        })
    }
}

const cardInput = function (options, callback) {
    const focusPrev = (e) => {
        e.preventDefault();
        const prev = $(e.currentTarget).prev(options.numberMaskSelector);
        if (prev.length) prev.focus();
    }
    const focusNext = (e) => {
        e.preventDefault();
        const next = $(e.currentTarget).next(options.numberMaskSelector);
        if (next.length) next.focus();
    }
    const valueToInput = () => {
        let value = '';
        options
            .numberMasks
            .each(function () {
                value += $(this).val();
            });
        options.numberInput.val(value);
        callback();
    }
    options.numberMasks
        .focus(function () {
            options.numberWrap
                .addClass(options.numberFocusClass)
        })
        .keydown(function (e) {
            const $this = $(this);
            if (e.keyCode == 46 || e.keyCode == 8) {
                if ($this.val().length == 0) {
                    focusPrev(e);
                }
            } else {
                if (e.key.length === 1 && $this.val().length >= 4) {
                    focusNext(e);
                }
            }
        })
        .keyup(function (e) {
            const $this = $(this);
            if (e.key.length === 1 && $this.val().length == 4) {
                focusNext(e);
            }
        })
        .blur(function (e) {
            let inCard = false;
            options.numberMasks.each(function () {
                if (this === e.relatedTarget) {
                    inCard = true;
                    return false;
                }
            })
            if (!inCard) {
                valueToInput();
                options
                    .numberWrap
                    .removeClass(options.numberFocusClass)
            }
        })
}

const autocompleteRegForm = function (prefix, validator) {
    const autoComplete = new google.maps.places.Autocomplete(document.getElementById(prefix + 'Address'));
    google.maps.event.addListener(autoComplete, 'place_changed', function () {
        const place = autoComplete.getPlace();
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
        const $this = $(this);
        tabs.setActive(
            $this,
            help ? formModal.find(`#${help}Tab`).index() : 0
        );
    })
}