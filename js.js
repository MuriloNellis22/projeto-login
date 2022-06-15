class validation {
    constructor() {
           this.validations = [
               'data-min-Lenght',
               'data-email-Validate',
               'data-password-Validate',
               'data-required'
           ]
    }
    validate(form) {
           
           let currentValidations = document.querySelectorAll('form .error-validation')

           let input = document.getElementsByTagName('input')
           let inputsArray = [...input]
           
    }
}

let submit = document.querySelector('#btn-submit')
let form = document.querySelector('#form')
let validator = new validation()

submit.addEventListener('click', e => {
    e.preventDefault()

    validator.validate(form)
})