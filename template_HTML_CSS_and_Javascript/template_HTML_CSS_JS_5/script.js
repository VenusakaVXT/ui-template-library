const eKey = document.querySelector('.component.key .component__value');
const eLocation = document.querySelector('.component.location .component__value');
const eWhich = document.querySelector('.component.which .component__value');
const eCode = document.querySelector('.component.code .component__value');
const alert = document.querySelector('.alert');
const box = document.querySelector('.box');
const result = document.querySelector('.result');

document.addEventListener('keydown', e => {
    eKey.innerText = e.key;
    eLocation.textContent = e.location;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;
    result.innerText = e.which;

    alert.classList.add('hide');
    box.classList.remove('hide');
})