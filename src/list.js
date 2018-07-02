const List = ( () => {
  const all = [];
  let listId = 0;
  return class{
    constructor(name){
      this.name = name;
      this.id = ++listId;
      this.tasks = [];
      all.push(this);
    }
    //static creates a class method similar to self.all in ruby
    static getAll(){
      return [...all]
    }

    // createTask(description, priority){
    //   let task = new Task(description, priority, this.id)
    //   this.tasks.push(task);
    // }

    showTasks(){
      return [...this.tasks]
    }

    el() {
    return `  <div id="${this.id}">
    <h2>${this.name}
      <button data-title="${this.name}" class="delete-list">
        X
      </button>
    </h2>
    <ul>
      
    </ul>
  </div>`
    }



  }
})();
