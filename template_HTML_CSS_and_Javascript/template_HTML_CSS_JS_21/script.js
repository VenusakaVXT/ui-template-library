const input = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');
const todos = document.querySelector('.todos');

function addTodo(todo) {
    let li = document.createElement('li');

    li.innerHTML = `
        <span>${todo.text}</span>
        <i class="fas fa-trash-alt"></i>
    `;

    if (todo.status === 'completed') {
        li.setAttribute('class', 'completed');
    }

    todos.appendChild(li);

    // Tick todo
    li.addEventListener('click', function() {
        this.classList.toggle('completed');
        saveTodoList()
    });

    // Delete todo
    li.querySelector('i').addEventListener('click', function() {
        // From the trash can deduce the parent element
        this.parentElement.remove();
        saveTodoList()
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputValue = input.value.trim();

    if (inputValue) {
        addTodo({
            text: inputValue,
        });
        saveTodoList();
    }

    input.value = '';
});

function saveTodoList() {
    let todoList = document.querySelectorAll('li');
    let todoStorage = [];

    todoList.forEach((item) => {
        let text = item.querySelector('span').innerText;
        let status = item.getAttribute('class');

        todoStorage.push({ text, status });
    });

    localStorage.setItem('todolist', JSON.stringify(todoStorage));
}

function init() {
    let data = JSON.parse(localStorage.getItem('todolist'));

    data.forEach((item) => {
        addTodo(item);
    });
}

init();