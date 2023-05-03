class List {
  constructor(task, index, complete) {
    this.task = task;
    this.index = index;
    this.isCompleted = complete;
  }

  static taskList = [];

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }

  updateTask(text) {
    this.task = text;
  }

  static reindex() {
    List.taskList.forEach((task, i) => {
      task.index = i + 1;
    });
  }

  static deleteTask(i) {
    List.taskList = List.taskList.filter((each) => each.index !== i);
    List.reindex();
  }

  static deleteCompleted() {
    List.taskList = List.taskList.filter((each) => !each.isCompleted);
    List.reindex();
  }
}

export default List;
