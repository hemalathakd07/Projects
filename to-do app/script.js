// Modern To-Do App JavaScript

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task when button is clicked
function addTask() {
  const taskText = taskInput.value.trim();

  // Validation
  if (!taskText) {
    showAlert("Please enter a task");
    return;
  }

  // Create task item
  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-actions">
      <button class="complete-btn">✔</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  // Complete task
  li.querySelector(".complete-btn").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.style.opacity = "0";

    setTimeout(() => {
      li.remove();
    }, 300);
  });

  // Add task to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
  taskInput.focus();
}

// Add task using Enter key
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Custom alert function
function showAlert(message) {
  alert(message);
}