class validation {
    constructor() {
           this.validations = [
               'minLenght',

           ]
    }
    validate(form) {
           
           

           let input = document.getElementsByTagName('input')
           let inputs = [...input]
           
    }
}

let submit = document.querySelector('#btn-submit')
let form = document.querySelector('#form')
let validator = new validation()

submit.addEventListener('click', e => {
    e.preventDefault()

    validator.validate(form)
})