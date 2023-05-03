import List from './list.js';

const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(List.taskList));
};

export default saveTasksToLocalStorage;
