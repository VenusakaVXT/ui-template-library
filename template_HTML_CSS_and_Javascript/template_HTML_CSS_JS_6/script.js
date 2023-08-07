const content = document.querySelector('.content');
const input = document.querySelector('.content input');
const removeAllBtn = document.querySelector('.remove-all');

let tags = ['HTML', 'CSS', 'Javascript'];

function createTags() {
    content.innerHTML = '';
    for (let i = 0; i < tags.length; i++) {
        content.innerHTML += `
            <div class="tags">
                ${tags[i]}
                <i onclick='removeTag(${i})' class='bx bx-x'></i>
            </div>
        `
    }

    content.appendChild(input);
    input.focus();
}

function removeTag(index) {
    tags.splice(index, 1);
    createTags();
}

createTags();

input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        tags.push(input.value.trim());
        input.value = '';
        createTags();
    }
})

removeAllBtn.addEventListener('click', () => {
    tags = [];
    createTags();
})