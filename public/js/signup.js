/**
 * Script for User Registration
 *
 * HTTP METHOD: POST
 * BASE_URL: http://localhost:5000/users
 */

// Base URL for the API calls
const BASE_URL = "http://localhost:5000";

// Function to add a new user
function addNewUser(request) {
  // Axios POST request to create a new user
  axios
    .post(`${BASE_URL}/users`, request)
    .then((response) => {
      // On successful user registration
      alert("User registered successfully!");
    })
    .catch((error) => {
      // Log error in case of a failed registration attempt
      console.error(error);
    });
}

// Adding event listener to the 'Add New User' button
document
  .getElementById("addNewUser")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Preventing default form submission behavior

    // Creating an object with user information gathered from the form inputs
    const request = {
      name: document.querySelector('input[name="full-name"]').value,
      email: document.querySelector('input[name="email"]').value,
      password: document.querySelector('input[name="password"]').value,
    };

    // Calling the function to add a new user with the collected data
    addNewUser(request);
  });
