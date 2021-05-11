//defining variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//loading the event listeners
loadEventListeners();

//creating the loadEventListener function
function loadEventListeners(){
  document.addEventListener('DOMContentLoaded', getTasks);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

//funtion to get task from the local storage
function getTasks(){
  
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
      //creating element
    const li = document.createElement('li');
    //adding classname
    li.className = 'collection-item';
    //creating a text node
    const t = document.createTextNode(task);
    //adding to the li
    li.appendChild(t);


    //creating logo of remove
    const logo = document.createElement('a');
    //adding class
    logo.className = 'delete-item secondary-content';
    //adding the icon html
    logo.innerHTML = '<i class="fa fa-remove"></i>';
    //append the logo to li
    li.appendChild(logo);


    //appending task created to tasklist
    taskList.appendChild(li);
  });

}


//adding task
function addTask(e){
  
  if(taskInput.value === ''){
    alert("Add a task to perform");
  }

  //creating element
  const li = document.createElement('li');
  //adding classname
  li.className = 'collection-item';
  //creating a text node
  const t = document.createTextNode(taskInput.value);
  //adding to the li
  li.appendChild(t);


  //creating logo of remove
  const logo = document.createElement('a');
  //adding class
  logo.className = 'delete-item secondary-content';
  //adding the icon html
  logo.innerHTML = '<i class="fa fa-remove"></i>';
  //append the logo to li
  li.appendChild(logo);


  //appending task created to tasklist
  taskList.appendChild(li);

  //adding to local storage
  storeTaskInLocalStorage(taskInput.value);

  //resetting the input to blank
  taskInput.value = '';
  e.preventDefault();

}

//store task in local storage
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//removing task
function removeTask(e){ 
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm("Do you want to delete this task")){
      e.target.parentElement.parentElement.remove();
      //removing from local storage
      removefromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//function to remove from local storage
function removefromLocalStorage(itemToRemove){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(itemToRemove.textContent === task){
      tasks.splice(index,1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//clearing tasks
function clearTasks(e){
  while(taskList.firstChild){
    taskList.firstChild.remove();
  }
  //clearing from local storage
  localStorage.clear();

}

//filter tasks
function filterTasks(e){

  const text = e.target.value.toLowerCase();
  
  document.querySelectorAll('.collection-item').forEach(function(task){
    //task is the iterator
    const item = task.firstChild.textContent;
 
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
    
  });  



}
