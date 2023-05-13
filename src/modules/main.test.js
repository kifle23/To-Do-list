const add = require('./crud.js').default;
const List = require('./list.js').default;

describe('Add/Delete items from to-do list', () => {
  describe('Add/Delete Tasks', () => {
    test('Add one new item to the list', () => {
      document.body.innerHTML = `
      <div class="to-do-list"></div>
      <i class="return-i">
      <i class="reset-i">
      <input id="create-task" type="text">
      <a href="#" id="clearCompleted"></a>
      `;
      add('Test', 1, false);
      add('Second Test', 2, false);
      add('third Test', 3, false);
      const list = document.querySelectorAll('.list-item');
      expect(list).toHaveLength(3);
    });
    test('Delete item from the list', () => {
      document.body.innerHTML = `
      <div class="to-do-list"></div>
      <i class="return-i">
      <i class="reset-i">
      <input id="create-task" type="text">
      <a href="#" id="clearCompleted"></a>
      `;
      add('Test', 1, false);
      add('Second Test', 2, false);
      add('third Test', 3, false);
      document.querySelector('.del-btn').click();
      const list = document.querySelectorAll('.list-item');
      expect(list).toHaveLength(2);
    });
  });
  describe('Testing edit, update and clear', () => {
    test('Testing clear completed', () => {
      document.body.innerHTML = `
      <div class="to-do-list"></div>
      <i class="return-i">
      <i class="reset-i">
      <input id="create-task" type="text">
      <a href="#" id="clearCompleted"></a>
      `;
      add('Go to gym', 1, true);
      add('Clean the room', 2, true);
      add('Do laundry', 3, false);
      add('Go shopping', 4, true);
      const list = document.querySelectorAll('.list-item');
      list.forEach((item) => {
        if (item.classList.value.includes('completed')) {
          item.remove();
        }
      });
      const Newlist = document.querySelectorAll('.list-item');
      expect(Newlist).toHaveLength(1);
    });
    test('Changing completed status', () => {
      List.taskList.push(new List('Do laundry', 1, false));
      List.taskList[0].toggleCompleted();
      expect(List.taskList[0].isCompleted).toBe(true);
    });
    test('Update task description', () => {
      List.taskList.push(new List('Go shopping', 1, false));
      List.taskList[0].updateTask('Do laundry');
      expect(List.taskList[0].task).toBe('Do laundry');
    });
  });
});
