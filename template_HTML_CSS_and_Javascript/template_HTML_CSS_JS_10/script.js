const html = document.querySelector('html');
const range = document.querySelector('.range');
const process = document.querySelector('.process');
const processValue = document.querySelector('.process span');

function setProcess(percent) {
    process.style.width = `${percent}%`;
    processValue.innerHTML = `${percent}%`;
    const brightness = Math.round((percent / 90) * 100);
    html.style.filter = `brightness(${brightness}%)`;
    const icon = document.querySelector('.fa-sun');
    if (percent >= 50) {
        icon.style.color = '#ff5e00';
        icon.style.textShadow = '1px 1px 1px #ff5e00'
    } else {
        icon.style.color = '#ccc';
        icon.style.textShadow = '1px 1px 1px #333';
    }
}

range.addEventListener('mousemove', function(e) {
    let processWidth = e.pageX - this.offsetLeft;
    let percent = processWidth / this.offsetWidth * 100;
    percent = Math.round(percent);
    setProcess(percent);
});

setProcess(90);