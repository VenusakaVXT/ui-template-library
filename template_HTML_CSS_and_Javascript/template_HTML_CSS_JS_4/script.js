const searchBtn = document.querySelector('.search-box__btn');

searchBtn.addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus(); // focus is available on input
})