// Show personalized greeting using the stored name
const username = localStorage.getItem('UserName');
document.getElementById('greetingTitle').textContent = `Welcome, ${username}! 🎯`;

// Handle task addition when button is clicked
document.getElementById('addTaskBtn').addEventListener("click", function () {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  // If input is empty, show alert
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create a new list item
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  // Add the new task to the task list
  document.getElementById('taskList').appendChild(taskItem);

  // Clear the input box
  taskInput.value = "";
});
