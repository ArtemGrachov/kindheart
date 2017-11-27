const initValidation = function (formId, prefix) {
    const constraints = {
        email: {
            presence: true,
            email: true
        }
    }
    $('#' + formId).submit(function (e) {
        e.preventDefault();
        console.log(validate($('#' + formId), constraints))
    })
}

initValidation('physHelpForm', 'phys');
initValidation('jurHelpForm', 'phys');