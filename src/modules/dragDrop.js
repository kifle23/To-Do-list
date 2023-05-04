export default () => {
  const task = document.querySelector(".list-item");
  task.addEventListener("dragstart", dragStart);

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
      e.target.classList.add("hide");
    }, 0);
  }

  const lists = document.querySelectorAll(".to-do-list");
  lists.forEach((list) => {
    list.addEventListener("dragenter", dragEnter);
    list.addEventListener("dragover", dragOver);
    list.addEventListener("dragleave", dragLeave);
    list.addEventListener("drop", drop);
  });

  function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  function dragLeave(e) {
    e.target.classList.remove("drag-over");
  }

  function drop(e) {
    e.target.classList.remove("drag-over");
    const id = e.dataTransfer.getData("text/plain");
    const draggable = document.getElementById(id);
    const list = e.target.closest(".to-do-list");
    list.appendChild(draggable);
    draggable.classList.remove("hide");
  }
};
