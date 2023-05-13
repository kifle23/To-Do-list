import storage from './saveTasksToLocalStorage.js';
import dragDrop from './dragDrop.js';
import tasks from './list.js';

const createTaskWrapper = (index, complete) => {
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('list-item');
  taskWrapper.setAttribute('id', index);
  taskWrapper.setAttribute('draggable', true);

  if (complete) {
    taskWrapper.classList.add('completed');
  }

  return taskWrapper;
};

const createCheckbox = (complete) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  if (complete) {
    checkbox.checked = true;
  }

  return checkbox;
};

const createTask = (taskItem, checkbox) => {
  const task = document.createElement('div');
  task.classList.add('task');

  if (checkbox.checked) {
    task.classList.add('completed');
  }

  return task;
};

const createBtnWrapper = () => {
  const btnWrapper = document.createElement('div');
  return btnWrapper;
};

const createDelBtn = () => {
  const delBtn = document.createElement('i');
  delBtn.classList.add('del-btn');
  return delBtn;
};
const createDragBtn = () => {
  const dragBtn = document.createElement('i');
  dragBtn.classList.add('cross');
  return dragBtn;
};

const createDescription = (taskItem) => {
  const description = document.createElement('input');
  description.type = 'text';
  description.classList.add('task-description');
  description.value = taskItem;

  return description;
};

const addEventListeners = (
  description,
  checkbox,
  delBtn,
  refreshBtn,
  dragBtn,
  taskWrapper,
) => {
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
    tasks[index].updateTask(description.value);
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

  checkbox.addEventListener('change', (e) => {
    const checkParent = e.target.parentElement.parentElement;
    const index = +checkParent.getAttribute('id') - 1;
    tasks.taskList[index].toggleCompleted();
    checkParent.classList.toggle('completed');
    storage();
  });
};

const addTask = (taskItem, index, complete) => {
  if (!taskItem) return;

  const listWrapper = document.querySelector('.to-do-list');

  const taskWrapper = createTaskWrapper(index, complete);
  const checkbox = createCheckbox(complete);
  const task = createTask(taskItem, checkbox);
  const btnWrapper = createBtnWrapper();
  const delBtn = createDelBtn();
  const refreshBtn = document.querySelector('.reset-i');
  const dragBtn = createDragBtn();
  const description = createDescription(taskItem, index);

  addEventListeners(
    description,
    checkbox,
    delBtn,
    refreshBtn,
    dragBtn,
    taskWrapper,
  );

  btnWrapper.appendChild(delBtn);
  task.appendChild(checkbox);
  task.appendChild(description);
  task.appendChild(dragBtn);
  taskWrapper.appendChild(task);
  taskWrapper.appendChild(btnWrapper);

  listWrapper.appendChild(taskWrapper);
};

export default addTask;
