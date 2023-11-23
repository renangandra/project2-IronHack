// Check if the user is logged in by looking for a token in local storage
if (localStorage.getItem("_")) {
  // If the user is logged in, hide the 'Sign In' and 'Sign Up' menu items
  document.getElementById("signin").classList.add("d-none");
  document.getElementById("signup").classList.add("d-none");

  // Show the 'My Houses', 'New House', and 'Logout' menu items
  document.getElementById("mine-houses").classList.remove("d-none");
  document.getElementById("new-house").classList.remove("d-none");
  document.getElementById("logout").classList.remove("d-none");

  // Note: The class 'd-none' is used to hide elements. By adding 'd-none', the element is hidden.
  // Removing 'd-none' will make an element visible.
} else {
  // If the user is not logged in, show the 'Sign In' and 'Sign Up' menu items
  document.getElementById("signin").classList.remove("d-none");
  document.getElementById("signup").classList.remove("d-none");

  // Hide the 'My Houses', 'New House', and 'Logout' menu items
  document.getElementById("mine-houses").classList.add("d-none");
  document.getElementById("new-house").classList.add("d-none");
  document.getElementById("logout").classList.add("d-none");
}

// Adding an event listener to the 'Logout' button
document.getElementById("logout").addEventListener("click", function (event) {
  // Clearing the local storage (removing the token) to log the user out
  localStorage.clear();
  // Redirecting the user to the home page after logging out
  window.location.href = "/";
});
