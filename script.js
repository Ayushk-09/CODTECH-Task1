const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task');
const addButton = document.querySelector('.button');

let tasks = [];

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task) {
    tasks.push({ text: task, completed: false });
    taskInput.value = '';
    renderTaskList();
  }
});

function renderTaskList() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.text;
    taskElement.dataset.index = index;
    if (task.completed) {
      taskElement.classList.add('completed');
    }

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTaskList();
    });

    taskElement.appendChild(deleteButton);
    taskList.appendChild(taskElement);
  });
}

taskList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const taskIndex = e.target.dataset.index;
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    renderTaskList();
  }
});

// Initial render
renderTaskList();
