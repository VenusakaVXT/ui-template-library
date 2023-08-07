const boxes = document.querySelectorAll('.box');
const targetList = document.querySelectorAll('.target');

boxes.forEach(box => {
    box.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    box.addEventListener('drop', function() {
        if (!box.querySelector('.target')) {
            this.appendChild(currentTarget);
        }
    });
});

let currentTarget = null;

targetList.forEach(target => {
    target.addEventListener('dragstart', function() {
        this.classList.add('dragging');
        currentTarget = this;
    });
    target.addEventListener('dragend', function() {
        this.classList.remove('dragging');
    });
});