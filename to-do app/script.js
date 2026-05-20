function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = taskText;

  // Mark task as completed
  span.onclick = function () {
    span.classList.toggle("completed");
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}