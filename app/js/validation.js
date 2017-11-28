const validation = (function () {
    const validateForm = function (form, options) {
        const validation = validate(form, options.constraints);
        form.serializeArray().forEach(
            el => validateInput(el.name, validation, options)
        )
        if (validation) {
            return false;
        }
        return true;
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
    const submitAccess = function (submit, validation) {
        validation ? submit.attr('disabled', true) : submit.removeAttr('disabled')
    }
    return {
        init: function (form) {
            const formEl = $('#' + form.id),
                validationObj = {
                    options: form.options,
                    form: formEl,
                    submitBtn: formEl.find(form.options.submitSelector),
                    validateForm: function () {
                        return validateForm(this.form, this.options)
                    },
                    validateInput: function (elName) {
                        const validation = validate(
                            this.form,
                            this.options.constraints)
                        validateInput(elName,
                            validation,
                            this.options)
                        submitAccess(this.submitBtn, validation);
                        if (validation) {
                            return false;
                        }
                        return true;
                    },
                    validateInputs: function (elNames) {
                        const validation = validate(
                            this.form,
                            this.options.constraints)
                        elNames.forEach(elName => {
                            validateInput(elName,
                                validation,
                                this.options)
                        })
                        submitAccess(this.submitBtn, validation);
                        if (validation) {
                            return false;
                        }
                        return true;
                    }
                }
            formEl.serializeArray().forEach(
                el => $('#' + el.name)
                .on('blur', function () {
                    validationObj.validateInput(el.name);
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
        submitSelector: '.form-submit>button',
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
            },
            [prefix + 'CardNumber']: {
                presence: {
                    message: '^Вкажіть номер карти'
                },
                format: {
                    pattern: /^4+[0-9]*$/,
                    message: '^Номер карти має починатися з 4 та може містити тільки цифри'
                },
                length: {
                    is: 16,
                    message: '^Номер карти має містити 16 цифр'
                }
            },
            [prefix + 'CardExpiration']: {
                presence: {
                    message: '^Вкажіть термін дії карти'
                },
                format: {
                    pattern: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                    message: '^Введіть термін дії у коректному форматі'
                }
            },
            [prefix + 'CardCvc']: {
                presence: {
                    message: '^Вкажіть CVC/CVV карти'
                },
                format: {
                    pattern: /^[0-9]{3,4}$/,
                    message: '^Вакжіть CVC/CVV у коректному форматі'
                }
            }
        }
    }
}