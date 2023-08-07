const listCounter = document.querySelectorAll('.counter');

function countNumbers(el) {
    let numberElement = el.querySelector('.counter h2');
    let to = parseInt(numberElement.innerText);
    let count = 0;
    let time = 100;
    let step = to / time;

    let isCounting = setInterval(() => {
        count += step;

        if (count > to) {
            clearInterval(isCounting);
            numberElement.innerText = to;
        } else {
            numberElement.innerText = Math.round(count);
        }

    }, 1);
}

listCounter.forEach(counterItem => {
    countNumbers(counterItem);
});