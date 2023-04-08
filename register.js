const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  // Check if the username and password are valid
  // If valid, log the user in
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = registerForm.username.value;
  const password = registerForm.password.value;
  const email = registerForm.email.value;
  // Check if the username, password, and email are valid
  // If valid, create a new user account
});