const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

//Event Listner for Add buttons

addTask.addEventListener('click', function(){
    let task = document.createElement('div')
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText= `${inputTask.value}`;
   task.appendChild(li);
    
    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class ="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton)

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML ='<i class ="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton)

    let editbutton = document.createElement("button");
    editbutton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editbutton.classList.add('editButton');
    task.appendChild(editbutton);

   if(inputTask.value ===''){
    alert("Please write a Task")
   } else{
    taskContainer.appendChild(task);
   }
    
   inputTask.value = "";



   checkButton.addEventListener('click',function(){
    checkButton.parentElement.style.textDecoration = checkButton.parentElement.style.textDecoration === "line-through" ? "none"  : "line-through";
   });

   deleteButton.addEventListener('click',function(e){
    let target = e.target;
    deleteButton.parentElement.remove();
   });

   editbutton.addEventListener('click',function(e){
    let target = e.target;
    editbutton.parentElement.firstChild.textContent= prompt("Edit the Task :");
    this.parentElement.style.textDecoration ='none'
   });





});