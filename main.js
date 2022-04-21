let plusBtn=document.getElementById('plus-btn')
let inputContent=document.getElementById('input-content')
let listItem=document.getElementById('list-item')
let taskList=[];

plusBtn.addEventListener("click", plusItem)
inputContent.addEventListener("focus", focus)

function focus(){
    inputContent.value=""
}

function plusItem(){
    let itemInfo= {
        id : randomId(),
        isComplete : false,
        contentVal : inputContent.value,        
    }
    taskList.push(itemInfo)
    console.log(taskList)
    render();
}

function render(){
    let resultHTML='';
    
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].isComplete == false){
            resultHTML+=`<div class="list-item">
                        <div>${taskList[i].contentVal}</div>
                        <div>
                        <button type="button" class="btn btn-secondary" onclick="checkItem('${taskList[i].id}')" >Check</button>
                        <button type="button" class="btn btn-secondary" onclick="deleteItem('${taskList[i].id}')">Delete</button>
                        </div>
                        </div>` 
        } else{
            resultHTML+=` <div class="list-item">
                        <div class="lineThro">${taskList[i].contentVal}</div>
                        <div>
                        <button type="button" class="btn btn-secondary" onclick="checkItem('${taskList[i].id}')" >Check</button>
                        <button type="button" class="btn btn-secondary" onclick="deleteItem('${taskList[i].id}')">Delete</button>
                        </div>
                        </div>` 
        }
       
    }  
    document.getElementById('list-items').innerHTML=resultHTML;
    
} render();


function randomId(){
    return Math.random().toString(36).substr(2, 16);
}

function checkItem(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
                taskList[i].isComplete = !taskList[i].isComplete 
                break;                
        }
    }
    render();
    console.log(taskList)
} 

function deleteItem(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id== id){
            taskList.splice(i,1)            
        }
    } render();
}

