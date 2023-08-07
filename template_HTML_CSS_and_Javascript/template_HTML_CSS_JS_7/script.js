function Validator(formSelector) {
    
    function getParent(element, selector) {

        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }

    }
    
    let formRules = {};

    let validatorRules = {
        required: (value) => {
            return value ? undefined : 'Please enter this field';
        },
        email: (value) => {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Please enter your email';
        },
        min: (min) => {
            return function(value) {
                return value.length >= min ? undefined : `Please enter at least ${min} characters`;
            }
        },
        max: (max) => {
            return function(value) {
                return value.length <= max ? undefined : `Please enter up to ${max} characters`;
            }
        },
        equalpassword: (value) => {
            return value === getConfirmValue() ? undefined : 'Please enter the same password as above';
        }
    }

    // Authentication compares with the above password
    function getConfirmValue() {
        return document.querySelector('#register-form #password').value;
    }

    // Get the form element in the DOM
    let formElement = document.querySelector(formSelector);

    // Only process when there is an element in the DOM
    if (formElement) {

        let inputs = formElement.querySelectorAll('[name][rules]');
        for (let input of inputs) {

            let rules = input.getAttribute('rules').split('|');
            for (let rule of rules) {  
                let ruleInfo;
                let isRuleHasValue = rule.includes(':');

                if (isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }
                
                let ruleFunc = validatorRules[rule];

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }

            // Listen for the validate event (blur, change, ...)
            input.addEventListener('blur', handleValidate)
            input.addEventListener('input', handleClearError);

        }
        
        // Validation handler function
        function handleValidate(e) {
            let rules = formRules[e.target.name];
            let errorMessage;

            // Another way to return error message
            // for (let rule of rules) {
            //     errorMessage = rule(e.target.value);
            //     if (errorMessage) break;
            // }

            rules.find((rule) => {
                errorMessage = rule(e.target.value);
                return errorMessage;
            });

            // If there is an error, display the error on the UI
            if (errorMessage) {
                let formGroup = getParent(e.target, '.form-group');
                if (formGroup) {
                    formGroup.classList.add('invalid');
                    let formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }

            return !errorMessage;
        }

        function handleClearError(e) {
            let formGroup = getParent(e.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                let formMessage = formGroup.querySelector('.form-message');

                if (formMessage) {
                    formMessage.innerText = '';
                }
            }
        }
 
    }

    // Handling form submit behavior
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();

        let inputs = formElement.querySelectorAll('[name][rules]');
        let isValid = true;
        for (let input of inputs) {
            if (!handleValidate({ target: input })) {
                isValid = false;
            }
        }

        // When there is no error, submit the form
        if (isValid) {
            formElement.submit();
        }

    });

}