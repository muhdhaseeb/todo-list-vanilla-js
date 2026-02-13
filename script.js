const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark complete
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";

  removeBtn.addEventListener("click", function (e) {
    e.stopPropagation(); 
    li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  input.value = "";
}
