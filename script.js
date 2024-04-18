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

//  got idea from google then applied it
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
