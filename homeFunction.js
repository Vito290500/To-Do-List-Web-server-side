const ClearBtn = document.getElementById('clearBtn');
const AddBtn = document.getElementById('saveBtn');
const Table = document.getElementById('Table');
const Tasks = [];

function generateId(){
    let id = Tasks.length;
    return id;
};

const clearInput = () =>{
    document.getElementById('hoursInput').value = '';
    document.getElementById('tasksInput').value = '';
    document.getElementById('priorityInput').value = '';
}

const updateTable = () => {
    let tableContent = ''; 

    for (const element in Tasks) {
        let taskChunks = [];
        for (let i = 0; i < Tasks[element].task.length; i += 40) {
            taskChunks.push(Tasks[element].task.substring(i, i + 40));
        }
        
        let taskHTML = taskChunks.join('<br>');
        
        tableContent += `
        <tr value="${Tasks[element].id}">
            <td>${Tasks[element].hours}</td>
            <td class="taskValue">${taskHTML}</td>
            <td>${Tasks[element].priority}</td>
            <td><button class="deleteBtn" value="${Tasks[element].id}"><img src="immagini/delete.png" width="25px" height="25px"></button></td>
        </tr>
        `;
    }

    const tbody = Table.querySelector('tbody');
    if (tbody) {
        tbody.innerHTML = tableContent;
    }
}

AddBtn.addEventListener('click', () => {
    const inputValueDict = {
        'hours': document.getElementById('hoursInput').value,
        'task' : document.getElementById('tasksInput').value,
        'priority': document.getElementById('priorityInput').value,
        'id': generateId(),
    }
    Tasks.push(inputValueDict);
    clearInput();
    updateTable();
})

const DeleteTask = (taskId) => {
    for (let i = 0; i < Tasks.length; i++){
        if (Tasks[i].id.toString() === taskId){
            Tasks.splice(i, 1); 
            break;
        }
    }
    updateTable();
};

Table.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteBtn')) {
        const taskId = event.target.value;
        DeleteTask(taskId);
    }
});

ClearBtn.addEventListener('click', clearInput);

