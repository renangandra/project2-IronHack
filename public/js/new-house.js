/**
 * Script for Adding a New House
 *
 * HTTP METHOD: POST
 * BASE_URL: http://localhost:5000/houses
 */

// Base URL for the API calls
const BASE_URL = "http://localhost:5000";

// Function to add a new house
function addNewHouse(request) {
  // Setting headers for the POST request, including the authorization token and content type
  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("_"), // Authorization token from local storage
    },
  };

  // Axios POST request to add a new house
  axios
    .post(`${BASE_URL}/houses`, request, headers)
    .then((response) => {
      // Redirect to '/mine-houses' upon successful house addition
      window.location.href = "/mine-houses";
    })
    .catch((error) => {
      // Log error in case of failure
      console.error(error);
    });
}

// Adding event listener to the 'Add New House' button
document
  .getElementById("btn-newHouse")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Preventing default form submission behavior

    // Creating a FormData object to gather input values from the form
    const request = new FormData();
    request.append(
      "price",
      document.querySelector('input[name="price"]').value
    );
    request.append("description", document.querySelector("textarea").value);
    request.append(
      "dateInitial",
      document.querySelector('input[name="dateInitial"]').value
    );
    request.append(
      "dateFinished",
      document.querySelector('input[name="dateFinished"]').value
    );
    request.append(
      "thumbnail",
      document.querySelector('input[name="image"]').files[0]
    );

    // Calling the function to add a new house with the form data
    addNewHouse(request);
  });

// Redirect to home page if the user is not authorized (no token in local storage)
if (!localStorage.getItem("_")) {
  window.location.href = "/";
}
