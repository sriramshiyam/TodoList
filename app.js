const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const clearAll = document.querySelector(".footer button");
const pendingTask = document.querySelector(".footer span");
const emptyvalmessage = document.getElementById("emptyinputbox");

addBtn.addEventListener("click", () => {
  let userData = inputBox.value;
  if (userData.length === 0) {
    emptyvalmessage.style.display = "block";
  } else {
    emptyvalmessage.style.display = "none";
  }
});

let liList = [];
let x = 0;
let tasks = 0

addBtn.onclick = () => {
  let userData = inputBox.value;
  if (userData.length !== 0) {
    liList.push(
      `<li>${inputBox.value}<span onclick="deleteTask(${x})"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clip-rule="evenodd"></path></svg></span></li>`
    );
    todoList.innerHTML = liList.join("");
    inputBox.value = "";
    x++;
    tasks++;
    pendingTask.innerHTML = `You have ${tasks} pending task`;
  }
};


function deleteTask(inde) {
    let l = liList[inde].split(">")[1].split("<")[0];
    liList[inde] = `<li class="linethr" style="background: rgb(230, 230, 230);">${l}<span style="background: rgb(27, 141, 255);" onclick="reviveTask(${inde})"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><path d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"></path></svg></span></li>`;
    todoList.innerHTML = liList.join('');
    tasks--;
    pendingTask.innerHTML = `You have ${tasks} pending task`;
}

function reviveTask(inde) {
    let l = liList[inde].split(">")[1].split("<")[0];
    liList[inde] = `<li>${l}<span onclick="deleteTask(${inde})"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clip-rule="evenodd"></path></svg></span></li>`;
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
