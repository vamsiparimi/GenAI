document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const colors = [
        '#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1',
        '#33FFA5', '#FFA833', '#57FF33', '#33FFF8', '#FF333D'
    ];

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(todoText) {
        if (todoText === '') return;

        const li = document.createElement('li');
        const todoItem = document.createElement('span');
        todoItem.className = 'todo-item';
        todoItem.innerText = todoText;

        const timestamp = document.createElement('span');
        timestamp.className = 'timestamp';
        timestamp.innerText = new Date().toLocaleString();

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&times;';
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        todoItem.addEventListener('click', function() {
            todoItem.classList.toggle('completed');
        });

        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        li.style.backgroundColor = randomColor;

        li.appendChild(todoItem);
        li.appendChild(timestamp);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
