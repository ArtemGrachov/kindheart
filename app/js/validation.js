const validation = (function () {
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
    const validateForm = function (form, options) {
        const validation = validate(form, options.constraints);
        form.serializeArray().forEach(
            el => validateInput(el.name, validation, options)
        )
    }
    const initForm = function (id, options) {
        const form = $('#' + id);
        form
            .submit(function (e) {
                e.preventDefault();
                validateForm(form, options);
            })
        form.serializeArray().forEach(
            el => $('#' + el.name)
            .on('blur', function () {
                validateInput(el.name, validate(form, options.constraints), options)
            })
        )
    }
    return {
        init: function (forms) {
            forms.forEach(form => initForm(form.id, form.options))
        }
    }
})()

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
                    pattern: /([()-]*?[0-9] *?)/,
                    message: '^Для номеру телефону дозволено лише цифри та символи ( ) -'
                },
                length: {
                    is: 10,
                    message: '^Довжина номеру телефону має складати 10 цифр'
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
            [prefix + 'PostIndex']: {
                presence: {
                    message: '^Вкажіть поштовий індекс'
                }
            }
        }
    }
}