const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const clearAll = document.querySelector(".footer button");
const pendingTask = document.querySelector(".footer span");

inputBox.onkeydown = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
};

let liList = [];
let x = 0;
let tasks = 0

addBtn.onclick = () => {
    liList.push(`<li>${inputBox.value}<span onclick="deleteTask(${x})"><i class="fas fa-trash"></i></span></li>`);
    todoList.innerHTML = liList.join('');
    inputBox.value = "";
    x++;
    tasks++;
    pendingTask.innerHTML = `You have ${tasks} pending task`;
};


function deleteTask(inde) {
    let l = liList[inde].split(">")[1].split("<")[0];
    liList[inde] = `<li class="linethr" style="background: rgb(230, 230, 230);">${l}<span style="background: rgb(27, 141, 255);" onclick="reviveTask(${inde})"><i class="fas fa-redo"></i></span></li>`;
    todoList.innerHTML = liList.join('');
    tasks--;
    pendingTask.innerHTML = `You have ${tasks} pending task`;
}

function reviveTask(inde) {
    let l = liList[inde].split(">")[1].split("<")[0];
    liList[inde] = `<li>${l}<span onclick="deleteTask(${inde})"><i class="fas fa-trash"></i></span></li>`;
    todoList.innerHTML = liList.join('');
    tasks++;
    pendingTask.innerHTML = `You have ${tasks} pending task`;
}

clearAll.onclick = () => {
    liList = [];
    todoList.innerHTML = "";
    x = 0;
    tasks = 0;
    pendingTask.innerHTML = `You have ${tasks} pending task`;
};
