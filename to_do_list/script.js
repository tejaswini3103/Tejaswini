let tasks=[];
function getTasks() {
  const taskList=document.getElementById("taskList");
  taskList.innerHTML=""; 

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    // Add task text
    const taskText = document.createElement("span");
    taskText.textContent = task;
    taskItem.appendChild(taskText);

    // Add Edit button
    const editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(index));
    taskItem.appendChild(editButton);

    // Add Delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(index));
    taskItem.appendChild(deleteButton);

    // Append the task item to the task list
    taskList.appendChild(taskItem);
  });
}

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task) {
    tasks.push(task); // Add task to the array
    taskInput.value = ""; // Clear the input field
    getTasks(); // Update the task list
  } else {
    alert("Please enter a task.");
  }
}

// Function to edit a task
function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index]);

  if (newTask) {
    tasks[index] = newTask; // Update the task in the array
    getTasks(); // Update the task list
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1); // Remove the task from the array
  getTasks(); // Update the task list
}

// Add event listener to the Add Task button
document.getElementById("addTaskBtn").addEventListener("click", addTask);
