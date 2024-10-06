// Wait for the DOM to fully load
window.addEventListener('DOMContentLoaded', () => {
    // Selecting necessary DOM elements
    const taskForm = document.querySelector('#new-task-form');
    const taskInput = document.querySelector('#taskinput');
    const tasksContainer = document.querySelector('#tasks');

    // Function to handle adding new tasks
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from submitting

        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new task div and add necessary HTML structure
        const task = document.createElement('div');
        task.classList.add('task');

        const taskContent = `
            <div class="content">
                <input type="text" class="text" value="${taskText}" readonly />
            </div>
            <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;
        task.innerHTML = taskContent;

        // Append the task to the tasks container
        tasksContainer.appendChild(task);

        // Clear the input field after adding the task
        taskInput.value = '';

        // Add event listeners to the edit and delete buttons
        const editButton = task.querySelector('.edit');
        const deleteButton = task.querySelector('.delete');
        const taskInputField = task.querySelector('.text');

        // Handle editing a task
        editButton.addEventListener('click', () => {
            if (editButton.innerText.toLowerCase() === 'edit') {
                taskInputField.removeAttribute('readonly');
                taskInputField.focus();
                editButton.innerText = 'Save';
            } else {
                taskInputField.setAttribute('readonly', 'readonly');
                editButton.innerText = 'Edit';
            }
        });

        // Handle deleting a task
        deleteButton.addEventListener('click', () => {
            tasksContainer.removeChild(task);
        });
    });
});
