const cardImg = document.querySelector('.card__img')
const cardHeading = document.querySelector('.card__info-title')
const cardContent = document.querySelector('.card__info-description')
const cardBtn = document.querySelector('.card__info-btn')

setTimeout(() => {
    cardImg.innerHTML = '<img src="./imgload.jpg"><span class="card__time">0:19</span>'

    cardHeading.innerHTML = 'Me at the zoo'
    cardContent.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    + ' Ut soluta qui repudiandae, maxime optio voluptatem eius eveniet officiis'
    cardBtn.innerHTML = 'View More'

    // remove loading
    document.querySelectorAll('.loading').forEach(item => {
        item.classList.remove('loading')
    })

}, 4000)