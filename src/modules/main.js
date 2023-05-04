import Tasks from './list.js';
import add from './crud.js';
import storage from './saveTasksToLocalStorage.js';

const addInput = document.querySelector('.add-item input');
const returnBtn = document.querySelector('.return-i');
const createTaskInput = document.querySelector('#create-task');
const clearAll = document.getElementById('clearCompleted');

if (localStorage.tasks) {
  const storedTasks = JSON.parse(localStorage.tasks);
  storedTasks.forEach((item) => {
    Tasks.taskList.push(new Tasks(item.task, item.index, item.isCompleted));
    add(item.task, item.index, item.isCompleted);
  });
}

const updateTaskArray = (task) => {
  Tasks.taskList.push(new Tasks(task, Tasks.taskList.length + 1, false));
};

returnBtn.addEventListener('click', () => {
  add(addInput.value, Tasks.taskList.length + 1, false);
  updateTaskArray(addInput.value);
  storage();
  addInput.value = '';
});

createTaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    add(addInput.value, Tasks.taskList.length + 1, false);
    updateTaskArray(addInput.value);
    storage();
    addInput.value = '';
  }
});
clearAll.addEventListener('click', (e) => {
  e.preventDefault();
  const allTasks = document.querySelectorAll('.list-item');
  allTasks.forEach((item) => {
    if (item.classList.value.includes('completed')) {
      item.remove();
      Tasks.deleteCompleted();
    }
  });
  storage();
  const listItems = document.querySelectorAll('.list-item');
  listItems.forEach((listItem, index) => {
    listItem.setAttribute('id', index + 1);
  });
});
