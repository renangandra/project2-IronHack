// Function for handling user login
function login(request) {
  // Axios POST request for user login
  axios
    .post(`${BASE_URL}/sessions`, request)
    .then((response) => {
      // On successful login
      // TODO: Store the response information in localStorage
      // Redirect to '/mine-houses' page
      window.location.href = "http://localhost:3000/mine-houses";
    })
    .catch((error) => {
      // Log error in case of failed login attempt
      console.error(error);
    });
}

// Event listener for the login button
document
  .getElementById("btnSignin")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Gathering values from the login form inputs
    const request = {
      email: document.querySelector('input[name="email"]').value,
      password: document.querySelector('input[name="password"]').value,
    };

    // Calling the login function with the collected data
    login(request);
  });
