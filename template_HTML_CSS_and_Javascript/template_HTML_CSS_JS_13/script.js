const animationElement = document.querySelectorAll('.show-on-scroll');

function checkAnimationElement(element) {
    const block = element.getClientRects()[0];
    const heightScreen = window.innerHeight;

    // Check if element is inside the screen
    if (!(block.bottom < 0 || block.top > heightScreen)) {
        element.classList.add('setslide');
    } else {
        element.classList.remove('setslide');
    }
}

function showAnimationScroll() {
    animationElement.forEach(el => {
        checkAnimationElement(el);
    });
}

window.addEventListener('scroll', showAnimationScroll);

showAnimationScroll();