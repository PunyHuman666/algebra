let input = document.querySelector("input");
const ul = document.querySelector(".taskList");
const addButton = document.querySelector(".addButton");

// function addNewTask() {
//   let inputValue = input.value;
//   const newTask = document.createElement("li");
//   const deleteButton = document.createElement("button");

//   if (inputValue !== "") {
//     newTask.innerText = inputValue;
//     deleteButton.innerText = "Delete";
//     ul.appendChild(newTask);
//     newTask.appendChild(deleteButton);
//     deleteButton.classList.add("removeButton");
//     input.value = "";
//   }

//   newTask.addEventListener("click", () => {
//     if (newTask.classList.contains("done")) {
//       newTask.classList.remove("done");
//     } else {
//       newTask.classList.add("done");
//     }
//   });

//   deleteButton.addEventListener("click", () => ul.removeChild(newTask));
// }

// addButton.addEventListener("click", addNewTask);

function addNewTask() {
  let inputValue = input.value.trim();

  createTask(inputValue);
}

function createTask(input) {
  if (input !== "") {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const deleteButton = document.createElement("button");

    li.innerText = input;
    checkbox.setAttribute("type", "checkbox");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("removeButton");

    li.prepend(checkbox);
    li.appendChild(deleteButton);
    ul.appendChild(li);

    clearInput();
    deleteTask(deleteButton, li);
    doneTask(checkbox, li);
  }
}

function deleteTask(deleteBtn, task) {
  deleteBtn.addEventListener("click", () => {
    ul.removeChild(task);
  });
}

function doneTask(check, task) {
  check.addEventListener("click", () => {
    task.classList.toggle("done");
  });
}

function clearInput() {
  input.value = "";
  input.focus();
}

addButton.addEventListener("click", addNewTask);
