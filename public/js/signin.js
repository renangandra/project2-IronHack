
const BASE_URL = "http://localhost:5000"

function login(request){
    axios.post(`${BASE_URL}/sessions`, request)
        .then(response => {
            // Saving the user information returned at login in the browser's memory so that it is not lost when the page is reloaded.
            localStorage.setItem("user_id", response.data.id);
            localStorage.setItem("user_email", response.data.email);
            localStorage.setItem("_", response.data.token);
            // Redirecting to my homes page
            window.location.href="http://localhost:3000/mine-houses";
        })
        .catch(error => console.error(error)); //SE DEU MERDA
}

//DOM -- HTML manipulation for sending information on forms and buttons
document.getElementById('btnSignin').addEventListener('click', function(event) {
    event.preventDefault();
    //Get values from inputs and assemble the request
    const request = {
        email: document.querySelector('input[name="email"').value,
        password: document.querySelector('input[name="password"').value
    }
    // Call AXIOS
    login(request);
  });