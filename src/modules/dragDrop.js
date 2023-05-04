export default () => {
  const task = document.querySelector('.list-item');

  const dragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  };

  const dragEnter = (e) => {
    e.preventDefault();
    e.target.classList.add('drag-over');
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.target.classList.add('drag-over');
  };

  const dragLeave = (e) => {
    e.target.classList.remove('drag-over');
  };

  const drop = (e) => {
    e.target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    const list = e.target.closest('.to-do-list');
    list.appendChild(draggable);
    draggable.classList.remove('hide');
  };

  task.addEventListener('dragstart', dragStart);
  const lists = document.querySelectorAll('.to-do-list');
  lists.forEach((list) => {
    list.addEventListener('dragenter', dragEnter);
    list.addEventListener('dragover', dragOver);
    list.addEventListener('dragleave', dragLeave);
    list.addEventListener('drop', drop);
  });
};
