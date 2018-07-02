document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const listForm = document.getElementById("create-list-form");

  const listApp = new appLister();

  listForm.addEventListener('submit', (e) => {
    e.preventDefault();

    listApp.createList();
    console.log(List.getAll().length);
    if(List.getAll().length === 1 ) {
    const taskForm = document.getElementById('create-task-form');
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const app = new taskLister();
      console.log(document.getElementById('new-task-description').value)
      app.createTask();
      taskForm.reset();
    })
  }

    listForm.reset();
  })


});



// const taskForm = document.querySelector('#create-task-form');
//
//
//   taskForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     taskList.createTask();
//     taskForm.reset();
//   })
