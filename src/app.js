class appLister {

  constructor() {
    this.div = document.getElementById("app-content");
    this.description = document.getElementById('new-list-title');
  }

  renderList(list) {
    document.getElementById('lists').innerHTML += list.el();
  }

  createList() {
    const value = this.description.value;
    const list = new List(value);
    if(List.getAll().length === 1) {
      this.div.innerHTML += this.taskForm(list);
      this.div.innerHTML += `<div id="lists"></div>`
  } else {
    let options = document.getElementById("parent-list")
      options.innerHTML += `<option value="${list.id}" selected>
        ${list.name}
      </option>`
  }
    this.renderList(list);
  }

   taskForm (list) {
    return `<form id="create-task-form" action="#" method="post">
      <label for="parent-list">Select List:</label>
      <select id="parent-list" name="${list.id}">
        <option value="${list.id}" selected>
          ${list.name}
        </option>
      </select>

      <label for="new-task-description">Task description:</label>
      <input required type="text" id="new-task-description" name="new-task-description" placeholder="description">

      <label for="new-task-priority">Priority level:</label>
      <input type="text" id="new-task-priority" name="new-task-prioroty" placeholder="priority">
      <input type="submit" value="Create New Task">
    </form>`
  }
}
