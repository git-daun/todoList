let inputBox = document.getElementById('input-box');
let plusBtn = document.getElementById('plus-btn');
let checkBtn = document.getElementById('check-btn');
let taskInput=[];
let taskBoard = document.getElementById('task-board');

plusBtn.addEventListener("click",addTask);

function addTask(){
  let task = {
    id : randomId(),
    inputVal : inputBox.value,
    isComplete : false,
  }
  taskInput.push(task)
  console.log(taskInput)
  render();
}

function render(){
  let resultHTML = '';
  for(let i=0; i<taskInput.length;i++){

    if(taskInput[i].isComplete == true){
      resultHTML+=`<div class="task-item">
    <div class="completeTrue">${taskInput[i].inputVal}</div>
    <div>
      <button onclick="taskDone('${taskInput[i].id}')">Check</button>
      <button onclick="taskDelete('${taskInput[i].id}')">Delete</button>
    </div>
  </div>`
    } else {

      resultHTML+=`<div class="task-item">
    <div>${taskInput[i].inputVal}</div>
    <div>
      <button onclick="taskDone('${taskInput[i].id}')">Check</button>
      <button  onclick="taskDelete('${taskInput[i].id}')">Delete</button>
    </div>
  </div>`
    }
    
  }
  document.getElementById('task-board').innerHTML = resultHTML;
}

function randomId(){
  return '_' + Math.random().toString(36).substr(2, 9);
}

function taskDone(id){
  
  for(let i=0;i<taskInput.length; i++){
    if(taskInput[i].id == id){
      taskInput[i].isComplete = !taskInput[i].isComplete
      break;
    }
  } render();
}

function taskDelete(id){
  for(let i=0;i<taskInput.length; i++){
    if(taskInput[i].id == id){
      taskInput.splice(i,1)
      break;
    }
  } render();
}
