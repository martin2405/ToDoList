const clearButton = document.querySelector('.to-do__pending-button');
const addTaskButton = document.querySelector('.form__button');
const deleteButtons = [...document.querySelectorAll('.to-do__tasks-trash')];

const taskList = document.querySelector('.to-do__tasks');

const input = document.querySelector('.form__text');
const actualTasksSpan = document.querySelector('.to-do__pending-number')

taskList.innerHTML = '';
let actualTasks = 0;

const clean = () => {
    taskList.innerHTML = '';
    actualTasks = 0;
    checkActaulTasks();
    addTaskButton.disabled = false;
}

const taskDelete = (newButton) => {
    const deleteButtons = [...document.querySelectorAll('.to-do__tasks-trash')];

    const index = deleteButtons.findIndex(delButton => newButton === delButton);

    taskList.removeChild(taskList.childNodes[index]);

    addTaskButton.disabled = false;

    actualTasks = actualTasks - 1;
    checkActaulTasks();
}

const add = (e) => {
    if (actualTasks === 11) {
        addTaskButton.disabled = true;
        alert('Osiągnąłeś maksymalną liczbę zadań');
        return;
    }

    e.preventDefault();
    const text = input.value;
    if (!text) return;

    const newTask = document.createElement('div');
    newTask.setAttribute('class', 'to-do__tasks-task');
    newTask.innerHTML = `${text}<button class="to-do__tasks-trash"><i class="fas fa-trash"></i></button>`;
    taskList.appendChild(newTask);

    const newButton = newTask.childNodes[1];
    newButton.addEventListener('click',() => taskDelete(newButton));
    deleteButtons.push(newTask);

    input.value = '';
    actualTasks++;

    checkActaulTasks();
}

const checkActaulTasks = () => {
    actualTasksSpan.textContent = `Masz ${actualTasks} oczekujące zadania`;
}

clearButton.addEventListener('click', clean);
addTaskButton.addEventListener('click',(e) => add(e));