

const BASE_URL = "http://localhost:5000"

function addNewUser(request) {
    axios.post(`${BASE_URL}/users`, request)
      .then(response => {
        // if ok
        alert("User registered successfully!");
        window.location.href="http://localhost:3000/signin"

      })
      .catch(error => console.error(error)); //if error
}


document.getElementById('addNewUser').addEventListener('click', function(event) {
    event.preventDefault();
    
    const request = {
        name: document.querySelector('input[name="full-name"').value,
        email: document.querySelector('input[name="email"').value,
        password: document.querySelector('input[name="password"').value
    }

    //Call AXIOS
    addNewUser(request);
  });