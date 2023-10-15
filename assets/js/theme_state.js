// Stores the state of the home page
// Use API history: `pushState`, `replaceState` and `popstate` with AJAX
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