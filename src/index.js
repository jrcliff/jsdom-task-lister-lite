document.addEventListener("DOMContentLoaded", () => {
  // your code here

    document.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      let newTask = document.getElementById('new-task-description')
      console.log(newTask.value);
      addTask()

  })
  
});

function addTask(){
  let ul = document.getElementById('tasks')
  let listItem = document.createElement('li')
  listItem.innerText = document.getElementById('new-task-description').value
  // listItem.appendChild(listItem) 
  ul.appendChild(listItem)



}
