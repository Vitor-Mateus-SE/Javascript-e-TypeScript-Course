const inputTask = document.querySelector(".newTask");
const btnTask = document.querySelector(".btn-task");
const listTask = document.querySelector(".tasklist");

inputTask.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTask.value) return;
    createWork(inputTask.value);
  }
});

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("delete")) {
    el.parentElement.remove();
    saveTasks();
  }
});

btnTask.addEventListener("click", function (e) {
  if (!inputTask.value) return;
  createWork(inputTask.value);
});

function createDeleteButton(li) {
  li.innerText += " ";
  const bottonDelete = document.createElement("button");
  bottonDelete.innerText = "Delete";
  bottonDelete.setAttribute("class", "delete");
  li.appendChild(bottonDelete);
}

function cleanValue() {
  inputTask.value = "";
  inputTask.focus();
}

function createLi() {
  const li = document.createElement("li");
  return li;
}

function createWork(textinput) {
  const li = createLi();
  li.innerText = textinput;
  listTask.appendChild(li);
  cleanValue();
  createDeleteButton(li);
  saveTasks();
}

function saveTasks() {
  const tasksToSave = listTask.querySelectorAll("li");
  const listOfTask = [];
  for (let task of tasksToSave) {
    let tarefatext = task.innerText;
    tarefatext = tarefatext.replace("Delete", "").trim();
    listOfTask.push(tarefatext);
  }

  const taskJSON = JSON.stringify(listOfTask);
  localStorage.setItem("tasks", taskJSON);
}

function addSaveTasks() {
  const tasks = localStorage.getItem("tasks");
  const listtasks = JSON.parse(tasks);

  for (let task of listtasks) {
    createWork(task);
  }
}
addSaveTasks();
