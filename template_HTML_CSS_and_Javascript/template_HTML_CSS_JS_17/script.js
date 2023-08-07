const imgList = document.querySelectorAll('.zoom img');
const mirror = document.querySelector('.zoom #mirror');

imgList.forEach((img) => {
    img.addEventListener('mousemove', function(e) {
        mirror.classList.remove('hide');

        mirror.style.top = `${e.clientY}px`;
        mirror.style.left = `${e.clientX}px`;
    
        mirror.style.backgroundSize = '1000px 1000px';
    
        const percentMouseOfWidth = (e.offsetX / this.offsetWidth) * 100;
        const percentMouseOfHeight = (e.offsetY / this.offsetHeight) * 100;
    
        mirror.style.backgroundPosition = `${percentMouseOfWidth}% ${percentMouseOfHeight}%`;

        const path = e.target.getAttribute('src');
        mirror.style.backgroundImage = `url(${path})`;
    });

    img.addEventListener('mouseleave', function(e) {
        mirror.classList.add('hide');
    });
});