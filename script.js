//selectors/;

const container = document.querySelector(".container");
const div_top = document.querySelector(".div_top");
const div_bottom = document.querySelector(".div_bottom");
const add_input = document.querySelector(".add_input");
const add_button = document.querySelector(".add_button");



let tasks_array = JSON.parse(localStorage.getItem("tasks_array"))   || [];



add_button.addEventListener('click', func_add_btn)
function func_add_btn(){
  if(tasks_array.includes(add_input.value)){
    return
  }
  tasks_array.push({task_name : add_input.value, checked : false})
  localStorage.setItem("tasks_array",  JSON.stringify(tasks_array) )
  div_bottom.innerHTML ="";
  display_tasks()
  add_input.value = "";
  
}

function display_task(task){
  console.log(task)
  let line_through = task.checked === true? "line" : "no";
  div_bottom.innerHTML += `<div class="task">
                            <span class="task_name_span ${line_through}">${task.task_name}</span>
                            <input type="submit" class="btn_check" value="check" onClick='func_check(this)'>
                            <input type="submit" class="btn_remove" value="remove" onClick='func_remove(this)'>
                          </div>`
}


function func_remove(e) {
  let task = e.parentNode.querySelector('.task_name_span').textContent;
  tasks_array = tasks_array.filter(item => {
    return item.task_name !== task;
  });
  localStorage.setItem("tasks_array", JSON.stringify(tasks_array));
  e.parentNode.remove();
}

function func_check(e) {
  let task = e.parentNode.querySelector('.task_name_span').textContent;
  let index = tasks_array.findIndex(item =>  item.task_name === task );
  if(index != -1){
    tasks_array[index].checked =  !tasks_array[index].checked;
  }
  localStorage.setItem("tasks_array", JSON.stringify(tasks_array));
  div_bottom.innerHTML ="";
  display_tasks()
}




function display_tasks(){
  let tasks_array = JSON.parse(localStorage.getItem("tasks_array"))   || [];

  for(let task of tasks_array){
    display_task(task)    
  }
}

display_tasks();
//container.addEventListener("click", deleteDone);
// addTodoButton.addEventListener("click", addToTask);

// function addToTask(event) {
//   event.preventDefault();
//   const taskIn = taskInput.value;
//   singleTask = { name: taskIn };
//   tasks.push(singleTask);

//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   const lastDiv = document.createElement("div");
//   container.appendChild(lastDiv);
//   taskInput.value = "";
//   displayTasks();

//   // Function to display tasks on the to-do list
//   function displayTasks() {
//     container.innerText = "";
//     for (let i = 0; i < tasks.length; i++) {
//       const listDiv = document.createElement("div");
//       const list = document.createElement("li");
//       list.classList.add("itemList");
//       list.innerText = tasks[i].name;

//       // create deletebutton
//       const deleteButton = document.createElement("button");
//       deleteButton.innerText = "delete";
//       deleteButton.classList.add("trashButton");
//       container.appendChild(deleteButton);
//       // create Donebutton
//       const Donebutton = document.createElement("button");
//       Donebutton.innerText = "done";
//       Donebutton.classList.add("finishedButton");
//       container.appendChild(Donebutton);
//       listDiv.appendChild(list);
//       container.appendChild(listDiv);
//     }
//   }
// }

















// const container = document.querySelector(".container");
// const div_top = document.querySelector(".div_top");
// const div_bottom = document.querySelector(".div_bottom");
// const add_input = document.querySelector(".add_input");
// const add_button = document.querySelector(".add_button");
// const div_eli = document.querySelector(".div_eli");


// let tasks_array = JSON.parse(localStorage.getItem("tasks_array"))   || [];



// add_button.addEventListener('click', func_add_btn)
// function func_add_btn(){
//   if(tasks_array.includes(add_input.value)){
//     return
//   }
//   tasks_array.push(add_input.value)
//   localStorage.setItem("tasks_array",  JSON.stringify(tasks_array) )
//   div_bottom.innerHTML ="";
//   display_tasks()
//   add_input.value = "";
  
// }

// function display_task(task){
//   div_bottom.innerHTML += `<div class="task">
//                             <span class="task_name_span">${task}</span>
//                             <input type="submit" class="btn_check" value="check" onClick='this.parentNode.querySelector(".task_name_span").style.textDecoration = "line-through";'>
//                             <input type="submit" class="btn_remove" value="remove" onClick='func_remove(this)'>
//                           </div>`
// }

// function func_remove(e) {
//   let task = e.parentNode.querySelector('.task_name_span').textContent;
//   tasks_array = tasks_array.filter(item => {
//     return item !== task;
//   });
//   localStorage.setItem("tasks_array", JSON.stringify(tasks_array));
//   e.parentNode.remove();
// }



// function display_tasks(){
//   for(let task of tasks_array){
//     display_task(task)    
//   }
// }

// display_tasks();