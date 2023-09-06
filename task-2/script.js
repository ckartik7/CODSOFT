let input= document.querySelector('.add-item');
let addbtn= document.querySelector('.add-button');
let tasks= document.querySelector('.tasks');


input.addEventListener('keyup',()=>{
    if(input.value.trim() != 0){
        addbtn.classList.add('active');
    }
    else{
        addbtn.classList.remove('active')
    }
});

addbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(input.value.trim() !=0){
        const newTask= document.createElement('div');
        newTask.classList.add('task');
        newTask.innerHTML= `
                <p> ${input.value} </p>
                <div class="task-buttons">
                    <button class='complete'>Complete</button>
                    <button class='delete'>Delete</button>
                </div> `;
        tasks.appendChild(newTask);
        localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: input.value, completed: false }]));
        input.value= '';
    }
    else{
        alert('Please enter a task');
    }
})

tasks.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
        let tasks= Array.from(JSON.parse(localStorage.getItem('tasks')));
        tasks.forEach(task=>{
            if(String(task.task)== e.target.parentElement.previousSibling.previousSibling.innerText){
                localStorage.removeItem(task);
            }
        })
    }
})

tasks.addEventListener('click', (e)=>{
    if(e.target.classList.contains('complete')){
        e.target.parentElement.parentElement.classList.toggle('complete');

        let tasks= Array.from(JSON.parse(localStorage.getItem('tasks')));
        tasks.forEach(task=>{
            if(String(task.task)== e.target.parentElement.previousSibling.previousSibling.innerText){
                task.completed= !task.completed;
            }
        })
    }
})

window.onload= loadTasks;

function loadTasks(){

    let taskss= Array.from(JSON.parse(localStorage.getItem('tasks')));
    taskss.forEach(task=>{
        const newTask= document.createElement('div');
        newTask.classList.add('task');
        newTask.innerHTML= `
                <p> ${task.task} </p>
                <div class="task-buttons">
                    <button class='complete'>Complete</button>
                    <button class='delete'>Delete</button>
                </div> `;
        tasks.appendChild(newTask);
    })
}



