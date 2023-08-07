const container = document.querySelector('.container');
const squareLength = 200;

for (let i = 0; i < squareLength; i++) {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square');
    container.appendChild(squareElement);

    squareElement.addEventListener('mouseenter', (e) => {
        const randomColor = randomColors();
        e.currentTarget.style.background = randomColor;
        e.currentTarget.style.boxShadow = `0 0 10px ${randomColor}, 0 0 100px ${randomColor}`;
    });

    squareElement.addEventListener('mouseleave', (e) => {
        e.currentTarget.style.background = '#1d1d1d';
        e.currentTarget.style.boxShadow = '0 0 2px #000';
    });
}

function randomColors() {
    let charColor = '0123456789abcdef';
    let colorCode = '#';

    for (let i = 0; i < 6; i++) {
        colorCode += charColor[Math.floor(Math.random() * charColor.length)];
    }

    return colorCode;
}