const color = document.getElementById('color');
const eraser = document.getElementById('eraser');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const size = document.getElementById('size');
const save = document.getElementById('save');
const clear = document.getElementById('clear');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// getPosition
let currentPos = {
    x: 0,
    y: 0
};

let currentPosAfter = {
    x: 0,
    y: 0
};

// init
let isDrawing = false;
let colorDefault = '#02edc6';
let sizeValue = 10;
size.innerText = sizeValue;

// Catch events
document.addEventListener('mousedown', (e) => {
    currentPos = {
        x: e.offsetX,
        y: e.offsetY
    }

    isDrawing = true;
});

document.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        currentPosAfter = {
            x: e.offsetX,
            y: e.offsetY
        }

        // Fill strokes
        context.beginPath();
        // argument arc(x, y, radius, startAngle, endAngle)
        context.arc(currentPos.x, currentPos.y, sizeValue, 0, 2 * Math.PI);
        context.fillStyle = colorDefault;
        context.fill();
        
        // Draw outline
        context.beginPath();
        context.moveTo(currentPos.x, currentPos.y);
        context.lineTo(currentPosAfter.x, currentPosAfter.y);
        context.strokeStyle = colorDefault;
        context.lineWidth = sizeValue * 2;
        context.stroke();

        currentPos.x = currentPosAfter.x;
        currentPos.y = currentPosAfter.y;
    }
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

color.addEventListener('change', (e) => {
    colorDefault = e.target.value;
});

eraser.addEventListener('click', () => {
    colorDefault = '#fff';
});

decrease.addEventListener('click', () => {
    sizeValue -= 5;
    sizeValue = sizeValue > 5 ? sizeValue : 5;
    size.innerText = sizeValue;
});

increase.addEventListener('click', () => {
    sizeValue += 5;
    sizeValue = sizeValue < 30 ? sizeValue : 30;
    size.innerText = sizeValue;
});

clear.addEventListener('click', () => {
    const canvasParam = canvas.getClientRects()[0];
    context.clearRect(0, 0, canvasParam.width, canvasParam.height);
});

save.addEventListener('click', () => {
    const output = canvas.toDataURL('image/png');
    save.setAttribute('href', output);
});

