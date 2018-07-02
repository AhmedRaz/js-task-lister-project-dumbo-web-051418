class taskLister {
  constructor(){
    this.desc = document.getElementById('new-task-description');
    this.priority = document.getElementById('new-task-priority');
    this.listId = document.getElementById('parent-list');

  }

  render(task) {
    this.ul.innerHTML += `<li>
    Task: ${task.description}
    <button data-list-id="${task.listId}" data-task-name="${task.description}" class="delete-task">
        X
    </button>
    <br>
    Priority: ${task.priority}
  </li>`;
  }

  createTask(){
    console.log(this)
    // debugger
    const listId = this.listId.value
    const desc = this.desc.value
    const priority = this.priority.value

    const task = new Task(desc, priority, listId)
    console.log(task);
    this.ul = document.getElementById(task.listId).childNodes[3]
    console.log(this.ul);
    this.render(task);
  }

}
