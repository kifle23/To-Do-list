export default class List {
  constructor(task, index) {
    this.task = task;
    this.index = index;
  }

  static taskList = [
    {
      description: 'Clean the house',
      completed: false,
      index: 0,
    },
    {
      description: 'Buy groceries',
      completed: true,
      index: 1,
    },
    {
      description: 'Do laundry',
      completed: false,
      index: 2,
    },
  ];
}
