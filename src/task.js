const Task = ( (description, priority, listId) => {
  const all = [];
  let taskId = 0;
  return class{
    constructor(description, priority, listId){
      this.description = description;
      this.listId = listId;
      this.id = ++taskId;
      this.priority = priority;
      all.push(this);
    }
    //static creates a class method similar to self.all in ruby
    static getAll(){
      return [...all]
    }
  }
})();
