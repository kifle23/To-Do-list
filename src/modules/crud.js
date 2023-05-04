import tasks from './list.js';
import storage from './saveTasksToLocalStorage.js';
import dragDrop from './dragDrop.js';

export default function addTask(taskItem, index, complete) {
  if (!taskItem) return;

  const refreshBtn = document.querySelector('.reset-i');
  const listWrapper = document.querySelector('.to-do-list');
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('list-item');
  taskWrapper.setAttribute('id', index);
  taskWrapper.setAttribute('draggable', true);

  const task = document.createElement('div');
  task.classList.add('task');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  if (complete) {
    checkbox.checked = true;
    taskWrapper.classList.toggle('completed');
  }
  const btnWrapper = document.createElement('div');
  const dragBtn = document.createElement('i');
  dragBtn.classList.add('cross');
  const delBtn = document.createElement('i');
  delBtn.classList.add('del-btn');
  const description = document.createElement('input');
  description.type = 'text';
  description.classList.add('task-description');
  description.value = taskItem;
  description.addEventListener('focus', () => {
    taskWrapper.classList.toggle('field-focus');
    delBtn.style.display = 'block';
    dragBtn.style.display = 'none';
  });
  description.addEventListener('blur', () => {
    taskWrapper.classList.toggle('field-focus');
  });
  description.addEventListener('input', () => {
    const index = +taskWrapper.getAttribute('id') - 1;
    tasks.taskList[index].updateTask(description.value);
    storage();
  });

  delBtn.addEventListener('click', () => {
    const theTask = delBtn.parentElement.parentElement;
    tasks.deleteTask(+theTask.getAttribute('id'));
    theTask.remove();
    const listItems = document.querySelectorAll('.list-item');
    for (let i = 0; i < listItems.length; i += 1) {
      listItems[i].setAttribute('id', i + 1);
    }
    storage();
  });
  refreshBtn.addEventListener('click', () => {
    delBtn.style.display = 'none';
    dragBtn.style.display = 'block';
  });
  dragBtn.addEventListener('click', () => {
    dragDrop();
  });
  const toggleCompleted = (e) => {
    const checkParent = e.target.parentElement.parentElement;
    const index = +checkParent.getAttribute('id') - 1;
    tasks.taskList[index].toggleCompleted();
    checkParent.classList.toggle('completed');
    storage();
  };

  checkbox.addEventListener('change', toggleCompleted);
  btnWrapper.appendChild(delBtn);
  task.appendChild(checkbox);
  task.appendChild(description);
  task.appendChild(dragBtn);
  taskWrapper.appendChild(task);
  taskWrapper.appendChild(btnWrapper);
  listWrapper.appendChild(taskWrapper);
}
