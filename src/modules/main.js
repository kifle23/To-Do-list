import tasks from './list.js';

function renderTasks() {
  const sortedTasks = tasks.taskList.sort((a, b) => a.index - b.index);
  sortedTasks.forEach((t) => {
    const listWrapper = document.querySelector('.to-do-list');
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('list-item');
    const task = document.createElement('div');
    task.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    if (t.completed) {
      checkbox.setAttribute('checked', '');
      taskWrapper.classList.toggle('completed');
    }
    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.classList.add('task-description');
    description.value = t.description;

    const crossBtn = document.createElement('i');
    crossBtn.classList.add('cross');
    task.appendChild(checkbox);
    task.appendChild(description);
    task.appendChild(crossBtn);
    taskWrapper.appendChild(task);
    listWrapper.appendChild(taskWrapper);
  });
}

renderTasks();
