const input = document.querySelector('.input-text')
const input_btn = document.querySelector('.input-btn')
const edit_btn = document.querySelector('.edit-btn')
const delete_btn = document.querySelector('.delete-btn')
const tasks_list = document.querySelector('.tasks-list')

input_btn.addEventListener("click", addTask)
tasks_list.addEventListener("click", deleteTask)


function addTask() {
    // console.log(input.value)
    // const newTask = document.createElement("li")
    if(!input.value.trim()){
        alert("Empty input. Try again")
        return
    }
    const newTask = `
    <li class="list-item">
        <p>${input.value.trim()}</p>
        <div class="btns">
            <i class = "edit-btn fas fa-edit"></i>
            <i class = "delete-btn fas fa-trash"></i>
        </div>
    </li>`
    tasks_list.insertAdjacentHTML("beforeend", newTask)
    input.value = ""
}

function deleteTask(e){
    const item = e.target
    if(item.classList[0] === "delete-btn"){
        const task = item.parentElement.parentElement
        task.remove()
    }

    else if(item.classList[0] === "edit-btn"){
        let selectedTask = item.parentElement.parentElement.children[0].textContent
        // input.value = selectedTask
        let editValue = prompt('Edit the select item', selectedTask);
        // item.parentElement.parentElement.children[0] = editValue;
        console.log(editValue);
        item.parentElement.parentElement.children[0].textContent = editValue;
    }

}



let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
                case '←':
                    if (display.innerText){
                        display.innerText = display.innerText.slice(0, -1);
                    }
                    break;
                    default:
                display.innerText += e.target.innerText;
        }
    });
});