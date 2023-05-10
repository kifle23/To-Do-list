const add = require("./crud.js").default;

describe("Add/Delete items from to-do list", () => {
  describe("Add/Delete Tasks", () => {
    test("Add one new item to the list", () => {
      document.body.innerHTML = `
      <div class="to-do-list"></div>
      <i class="return-i">
      <input id="create-task" type="text">
      <a href="#" id="clearCompleted"></a>
      `;
      add("Test", 1, false);
      add("Second Test", 2, false);
      const list = document.querySelectorAll(".list-item");
      expect(list).toHaveLength(2);
    });
    test("Delete item from the list", () => {
      document.body.innerHTML = `
      <div class="to-do-list"></div>
      <i class="return-i">
      <input id="create-task" type="text">
      <a href="#" id="clearCompleted"></a>
      `;
      add("Test", 1, false);
      add("Second Test", 2, false);
      document.querySelector(".del-btn").click();
      const list = document.querySelectorAll(".list-item");
      expect(list).toHaveLength(1);
    });
  });
});
