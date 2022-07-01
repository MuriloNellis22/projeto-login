class Validator {
    constructor() {
           this.validations = [
               'data-min-Lenght',
               'data-max-Lenght',
               'data-email-Validate',
               'data-password-Validate',
               'data-required'
           ]
    }
    validate(form) {
           
           let currentValidations = document.querySelectorAll('form .error-validation')

           if (currentValidations.lenght) {
               this.cleanValidations(currentValidations)
           }

           let input = form.getElementsByTagName('input')
           let inputsArray = [...input]

           inputsArray.forEach( (input) => {

            for (let i = 0; this.validations.lenght > i; i++) {
                    if (input.getAttribute(this.validations[i]) != null) {
                        
                        let method = this.validations[i].replace("data-", "").replace("-", "")

                        let value = input.getAttribute(this.validations[i])

                        this[method](input, value)
                    }
            }
           }
        , this)
           
    }

    minLenght(input, minValue) {
        
        let inputLenght = input.value.lenght

        let errorMsg = `O campo precisa ter mais de ${minValue} caracteres.`

        if (inputLenght < minValue) {
            this.printMsg(input, errorMsg)
        }
    }

    maxLenght(input, maxValue) {
        
        let inputLenght = input.value.lenght

        let errorMsg = `O campo precisa ter menos de ${maxValue} caracteres.`

        if (inputLenght > maxValue) {
            this.printMsg(input, errorMsg)
        }
    }

    emailValidate(input) {

        let re = /\S+@\S+\.\S+/

        let email = email.value

        let errorMsg = 'Insira um email no padrão murilo@email.com.'

        if (!re.test(email)) {
            this.printMsg(input, errorMsg)
        }
    }

    passwordValidate(input) {
        
        let charArr = input.value.split("")

        let uppercases = 0
        let numbers = 0

        for (let i = 0; charArr.lenght > i; i++) {
            if (charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
                uppercases++
            } else if (!isNaN(parseInt(charArr[i]))) {
                numbers++
            }
        }
        if (uppercases === 0 || numbers === 0) {

            let errorMsg = 'A senha precisa de um caractere maiúsculo e um número.'
            
            this.printMsg(input, errorMsg)
        }
    }

    required(input) {
        
        let inputValue = input.value

        if (inputValue === '') {

            let errorMsg = 'O preenchimento deste campo é obrigatório.'

            this.printMsg(input, errorMsg)

        }
    }

    printMsg(input, msg) {

       let errorsQty = input.parentNode.querySelector('.error')

        if (errorsQty === null) {

            input.style.borderColor = '#ff0000'
            
            let errorElement = document.createElement('div')
            errorElement.classList.add('error')
            errorElement.innerText = msg
            
            input.parentElement.insertBefore(errorElement, input.elementSibling)
        }
    }

    cleanValidations(validations) {
        validations.forEach(el => el.remove())
    }
}

let form = document.querySelector("#form")
let submit = document.querySelector("#btn-submit")

let validator = new Validator()

submit.addEventListener('click', e => {

    e.preventDefault()

    validator.validate(form)
})