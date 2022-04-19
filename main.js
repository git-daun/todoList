let inputBox = document.getElementById('input-box')
let plusBtn = document.getElementById('plus-btn')
let checkBtn = document.getElementById('check-btn')
let taskList=[];


plusBtn.addEventListener("click",addTask)

function addTask(){
    let inputVal = inputBox.value;
    taskList.push(inputVal)
    console.log(taskList)
    render()
}

function render(){
    let resultHTML ='';
     
    for(let i=0; i<taskList.length;i++){
        resultHTML += `<div class="task-item">
        <div>${taskList[i]} </div>
        <div>
          <button id="check-btn">Check</button>
          <button>Delete</button>
        </div>
      </div>`
    }
    document.getElementById('task-board').innerHTML = resultHTML 
}