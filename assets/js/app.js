const body = document.body
const toogleTheme = document.getElementById('toggleTheme')

if (localStorage.getItem('bodyClass')) {
    body.setAttribute('class', localStorage.getItem('bodyClass'))
}

toogleTheme.addEventListener('change', () => {
    body.classList.toggle('dark')

    // Store class current in localStorage
    localStorage.setItem('bodyClass', body.getAttribute('class'))
})


const templateWrap1 = document.querySelector('#list-first .grid__row')
const template_HTML_CSS = [
    {
        hrefValue: './template_HTML_and_CSS/template_HTML_CSS_1/index.html',
        imageValue: './assets/image/library_HTML_CSS_img/1.png',
        backgroundColorValue: 'var(--background-pale-red)',
        nameValue: 'Program Language Book'
    },
    {
        hrefValue: './template_HTML_and_CSS/template_HTML_CSS_2/index.html',
        imageValue: './assets/image/library_HTML_CSS_img/2.png',
        backgroundColorValue: 'var(--background-pale-green)',
        nameValue: 'Compass'
    },
    {
        hrefValue: './template_HTML_and_CSS/template_HTML_CSS_3/index.html',
        imageValue: './assets/image/library_HTML_CSS_img/3.png',
        backgroundColorValue: 'var(--background-pale-pink)',
        nameValue: 'Daily Goals'
    },
    {
        hrefValue: './template_HTML_and_CSS/template_HTML_CSS_4/index.html',
        imageValue: './assets/image/library_HTML_CSS_img/4.png',
        backgroundColorValue: 'var(--background-skin)',
        nameValue: 'Loading Animation'
    },
    {
        hrefValue: './template_HTML_and_CSS/template_HTML_CSS_5/index.html',
        imageValue: './assets/image/library_HTML_CSS_img/5.png',
        backgroundColorValue: 'var(--background-whitesmoke)',
        nameValue: 'Button Interfaces'
    }
]

const templateWrap2 = document.querySelector('#list-second .grid__row')
const template_HTML_CSS_Javascript = [
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_1/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/1.png',
        backgroundColorValue: 'var(--background-pale-red)',
        nameValue: 'Modal'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_2/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/2.png',
        backgroundColorValue: 'var(--background-pale-blue)',
        nameValue: 'Product Card'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_3/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/3.png',
        backgroundColorValue: 'var(--background-skin)',
        nameValue: 'Image Gallery'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_4/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/4.png',
        backgroundColorValue: 'var(--background-pale-green)',
        nameValue: 'Search Box'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_5/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/5.png',
        backgroundColorValue: 'var(--background-whitesmoke)',
        nameValue: 'Detect Press Key'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_6/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/6.png',
        backgroundColorValue: 'var(--background-skin)',
        nameValue: 'Search Tags'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_7/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/7.png',
        backgroundColorValue: 'var(--background-whitesmoke)',
        nameValue: 'Form Validation'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_8/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/8.png',
        backgroundColorValue: 'var(--background-grayblack)',
        nameValue: 'Weather App'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_9/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/9.png',
        backgroundColorValue: 'var(--background-pale-red)',
        nameValue: 'Toast Message'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_10/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/10.png',
        backgroundColorValue: 'var(--background-pale-purple)',
        nameValue: 'Brightness Slider'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_11/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/11.png',
        backgroundColorValue: 'var(--background-pale-green)',
        nameValue: 'Preview Image'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_12/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/12.png',
        backgroundColorValue: 'var(--background-grayblack)',
        nameValue: 'Search Product'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_13/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/13.png',
        backgroundColorValue: 'var(--background-pale-pink)',
        nameValue: 'Page Scroll'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_14/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/14.png',
        backgroundColorValue: 'var(--background-skyblue)',
        nameValue: 'Counter Follows'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_15/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/15.png',
        backgroundColorValue: 'var(--background-skin)',
        nameValue: 'Drag And Drop'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_16/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/16.png',
        backgroundColorValue: 'var(--background-greenblue)',
        nameValue: 'Drawing App'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_17/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/17.png',
        backgroundColorValue: 'var(--background-pale-purple)',
        nameValue: 'Zoom Image'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_18/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/18.png',
        backgroundColorValue: 'var(--background-pale-red)',
        nameValue: 'Hover Board'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_19/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/19.png',
        backgroundColorValue: 'var(--background-pale-red)',
        nameValue: 'Tabs UI'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_20/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/20.png',
        backgroundColorValue: 'var(--background-skyblue)',
        nameValue: 'Light/Dark Mode'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_21/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/21.png',
        backgroundColorValue: 'var(--background-pale-green)',
        nameValue: 'Todo List'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_22/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/22.png',
        backgroundColorValue: 'var(--background-pale-blue)',
        nameValue: 'Skeleton Loading Effect'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_23/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/23.png',
        backgroundColorValue: 'var(--background-greenblue)',
        nameValue: 'Play Piano'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_24/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/24.png',
        backgroundColorValue: 'var(--background-pale-pink)',
        nameValue: 'Simple Carousel'
    },
    {
        hrefValue: './template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_25/index.html',
        imageValue: './assets/image/library_HTML_CSS_JS_img/25.png',
        backgroundColorValue: 'var(--background-skin)',
        nameValue: 'Custom Video Player'
    },
]

let templateElement
function renderTemplate(item, store) {
    const templateContent = `
    <a class="container__template-item" href="${item.hrefValue}">
    <div class="container__template-item-img"
        style="background-image: url(${item.imageValue})">
    </div>
    <h4 class="container__template-item-name" 
        style="background: ${item.backgroundColorValue}">${item.nameValue}
    </h4>
    </a>
    `
    templateElement = document.createElement('div')
    templateElement.classList.add('grid__column')
    templateElement.innerHTML = templateContent
    store.appendChild(templateElement)
}

template_HTML_CSS.forEach(templateItem => {
    renderTemplate(templateItem, templateWrap1)
})

template_HTML_CSS_Javascript.forEach(templateItem => {
    renderTemplate(templateItem, templateWrap2)
})

/*
// Stores the state of the home page
// Use `pushState`, `replaceState` and `popstate` APIs with AJAX
document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        var href = this.getAttribute('href')

        // Change URL and browser history
        history.pushState(null, null, href)

        // Reload the content of the new page
        loadPage(href)
    })
})

// When popstate event is fired (back from new page)
window.addEventListener('popstate', () => {
    // Get the current path
    var path = location.pathname

    // Reloads the content of the current page
    loadPage(path)

})

// Method to load the content of the new page
function loadPage(url) {
    // Create an AJAX obj
    var xhr = new XMLHttpRequest()

    // Register an event to handle the event 
    // when the AJAX object finishes downloading the new page's content
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Change the content of the current page with the content of the new page
            document.querySelector('#content').innerHTML = xhr.responseText
        }
    }

    // Download the content of the new page
    xhr.open('GET', url, true)
    xhr.send()
}
*/