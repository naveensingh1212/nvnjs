document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();

        const title = document.getElementById('task-title').value;
        const desc = document.getElementById('task-desc').value;
        const category = document.getElementById('task-category').value;
        const deadline = document.getElementById('task-deadline').value;

        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <h3>${title}</h3>
            <p>${desc}</p>
            <p>Category: ${category}</p>
            <p>Deadline: ${deadline}</p>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);

        taskForm.reset();
    }
});

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
