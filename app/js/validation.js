const validation = (function () {
    const validateForm = function (form, options) {
        const validation = validate(form, options.constraints);
        form.serializeArray().forEach(
            el => validateInput(el.name, validation, options)
        )
    }
    const validateInput = function (elName, validation, options) {
        const $el = $('#' + elName);
        $el
            .siblings('.' + options.messageClass)
            .remove();
        if (validation && elName in validation) {
            $el
                .addClass(options.invalidClass);
            $el
                .removeClass(options.validClass);
            $el
                .after('<div class="' + options.messageClass + '">' + validation[elName] + '</div>')
        } else {
            $el
                .removeClass(options.invalidClass);
            $el
                .addClass(options.validClass);
        }
    }
    return {
        init: function (form) {
            const formEl = $('#' + form.id),
                validationObj = {
                    options: form.options,
                    form: formEl,
                    validateForm: function () {
                        validateForm(this.form, this.options)
                    },
                    validateInput: function (elName) {
                        validateInput(elName,
                            validate(
                                this.form,
                                this.options.constraints),
                            this.options)
                    },
                    validateInputs: function (elNames) {
                        elNames.forEach(elName => this.validateInput(elName))
                    }
                }
            formEl.submit(function (e) {
                e.preventDefault();
                validationObj.validateForm();
            })
            formEl.serializeArray().forEach(
                el => $('#' + el.name)
                .on('blur', function () {
                    validationObj.validateInput(el.name)
                })
            )
            return validationObj;
        }
    }
})()

validate.validators.phoneLength = function (value, options, key, attributes) {
    if (value && value.replace(/[^0-9]/g, '').length != 10) {
        return options.message;
    };
}

const helpFormOptions = function (prefix) {
    return {
        validClass: 'valid',
        invalidClass: 'invalid',
        messageClass: 'invalid__msg',
        constraints: {
            [prefix + 'Firstname']: {
                presence: {
                    message: '^Введіть ім\'я'
                },
                length: {
                    minimum: 2,
                    maximum: 30,
                    message: '^Ім\'я має бути в межах між 2 та 30 символами'
                }
            },
            [prefix + 'Lastname']: {
                presence: {
                    message: '^Введіть прізвище'
                },
                length: {
                    minimum: 2,
                    maximum: 30,


                    message: '^Прізвище має бути в межах між 2 та 30 символами'
                },
            },
            [prefix + 'Org']: {
                presence: {
                    message: '^Введіть назву організації'
                },
                length: {
                    minimum: 2,
                    maximum: 30,
                    message: '^Назва організації має бути в межах між 2 та 30 символами'
                },
            },
            [prefix + 'Email']: {
                presence: {
                    message: '^Введіть Email'
                },
                email: {

                    message: '^Введіть коректний Email'
                }
            },
            [prefix + 'Phone']: {
                presence: {
                    message: '^Введіть номер телефону'
                },
                format: {
                    pattern: /^[0-9-)(]*$/,
                    message: '^Для номеру телефону дозволено лише цифри та символи ( ) -'
                },
                phoneLength: {
                    message: '^Номер телефону має скаладитсь із 10 цифр'
                }
            },
            [prefix + 'Country']: {
                presence: {
                    message: '^Вкажіть країну'
                },
            },
            [prefix + 'City']: {
                presence: {
                    message: '^Вкажіть місто'
                }
            },
            [prefix + 'District']: {
                presence: {
                    message: '^Вкажіть штат/район'
                }
            },
            [prefix + 'Address']: {
                presence: {
                    message: '^Вкажіть адресу'
                }
            },
            [prefix + 'PostalCode']: {
                presence: {
                    message: '^Вкажіть поштовий індекс'
                }
            }
        }
    }
}