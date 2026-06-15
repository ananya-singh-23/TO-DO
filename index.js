const toDoList=[{task: "tasks....", date: ""}];

renderList();

function renderList(){   
    let listhtml='';
    let i;
    for(i=0; i<toDoList.length; i++)
    {
        const element = toDoList[i];
        const html=`<div class="task-item">
            <div class="js-par">${element.task}</div>
            <div class="js-date">${element.date}</div>
            <button onclick="toDoList.splice(${i}, 1);renderList();" class="js-del">Delete</button>
        </div>`;
        listhtml+= html;
    }
    console.log(listhtml);
    document.querySelector(".js-List").innerHTML=listhtml;
}

function addTask()
{
    const newTask = {
        task: document.querySelector(".todo-input").value,
        date: document.querySelector(".date-input").value
    };
    toDoList.push(newTask);
    console.log(toDoList);
    document.querySelector(".todo-input").value="";
    document.querySelector(".date-input").value="";
    
    renderList();
}

