// Function to handle login when button is clicked
function login() {
  // Get the value from the name input field
  const name = document.getElementById("name").value;

  // Get the value from the password input field
  const password = document.getElementById("password").value;

  // Check if either name or password is empty
  if (name === "" || password === "") {
    // Show error message if inputs are empty
    document.getElementById("error-message").textContent = "Please enter both name and password.";
    return; // Stop the function
  }

  // Save the user's name to localStorage so we can use it on the next page
  localStorage.setItem("UserName", name);

  // Redirect to task page after successful login
  window.location.href = "task.html";
}
