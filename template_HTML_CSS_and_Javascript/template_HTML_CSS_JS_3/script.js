const wrap = document.querySelector('.wrapper');
const imageList = [
    {
        srcImage: './image/py1.jpg',
        titleImage: 'Gành Đá Đĩa'
    },
    {
        srcImage: './image/py2.jpg',
        titleImage: 'Hòn Nưa, Vũng Rô'
    },
    {
        srcImage: './image/py3.jpg',
        titleImage: 'Tháp Nghinh Phong'
    },
    {
        srcImage: './image/py4.jpg',
        titleImage: 'Bãi Xép Đông Tác'
    },
    {
        srcImage: './image/py5.jpg',
        titleImage: 'Đại Lãnh Phú Yên'
    },
    {
        srcImage: './image/py6.jpg',
        titleImage: 'Mũi Điện'
    },
    {
        srcImage: './image/py7.jpg',
        titleImage: 'Công Viên Tuy Hòa'
    },
    {
        srcImage: './image/py8.jpg',
        titleImage: 'Tháp Nhạn'
    }
];

imageList.forEach(imageItem => {
    // Create wrapper for each image
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image-wrapper');
    wrap.appendChild(imageWrapper);

    // Render image
    const imageElement = document.createElement('div');
    imageElement.classList.add('images');
    const imageSourceElement = document.createElement('img');
    imageSourceElement.src = imageItem.srcImage;
    imageElement.appendChild(imageSourceElement);
    imageWrapper.appendChild(imageElement);

    // Render title
    const imageTitleElement = document.createElement('h2');
    imageTitleElement.innerHTML = imageItem.titleImage;
    imageWrapper.appendChild(imageTitleElement);
});

// Handle gallery
const gallery = document.querySelector('.gallery');
const gallerImg = document.querySelector('.gallery__inner img');
const images = document.querySelectorAll('.images img');
const closeBtn = document.querySelector('.gallery__close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showGallery() {
    if (currentIndex == 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    if (currentIndex == images.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }

    gallerImg.src = images[currentIndex].src;
    gallery.classList.add('gallery__show');
}

images.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        showGallery();
    })
})

closeBtn.addEventListener('click', () => {
    gallery.classList.remove('gallery__show');
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        gallery.classList.remove('gallery__show');
    }
})

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
})

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    }
})