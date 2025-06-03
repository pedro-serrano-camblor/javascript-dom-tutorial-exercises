// Your code here
let toDoList = document.querySelector("ul");
let addToList = document.getElementById("addToDo");

toDoList.addEventListener("click", function (element) {
  if (element.target.matches(".fa-trash")) {
    element.target.closest("li").remove();
  }
});

addToList.addEventListener("keypress", function (element) {
  if (element.key === "Enter") {
    const taskValue = addToList.value;
    if (taskValue) {
      const newTask = document.createElement("li")
      newTask.innerHTML = `<span><i class="fa fa-trash"></i></span> ${taskValue}`
      toDoList.appendChild(newTask);
      addToList.value = "";
    }
  }
});