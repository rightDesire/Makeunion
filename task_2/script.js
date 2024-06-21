document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodoItem(input.value);
        input.value = '';
    });

    function addTodoItem(taskText) {
        if (taskText.trim() === '') return;

        const listItem = document.createElement('li');
        listItem.className = 'todo-list__item';
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button>Удалить</button>
        `;

        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        listItem.querySelector('button').addEventListener('click', (event) => {
            event.stopPropagation();
            listItem.remove();
        });

        list.appendChild(listItem);
    }
});
