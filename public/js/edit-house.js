
const BASE_URL = "http://localhost:5000"

let months = [
    "JAN", "FEB", "MAR", "APR",
    "MAY", "JUN", "JUL", "AUG",
    "SEP", "OCT", "NOV", "DEC"
  ];
  

let currentUrl = window.location.href; // Replace with window.location.href in your code


let segments = currentUrl.split('/');


let house_id = segments[segments.length - 1];

axios.get(`${BASE_URL}/houses/${house_id}`, { headers: {
    "authorization": localStorage.getItem("_")
}})
  .then(response => {
    console.log(response.data)
    // It goes through the array returned from the API and creates a list of cards with the information returned.
    document.querySelector('input[name="price"]').value = response.data.price;
    document.querySelector('textarea').value = response.data.description;
    document.querySelector('input[name="dateInitial"]').value = new Date(response.data.dateInitial).toLocaleDateString();
    document.querySelector('input[name="dateFinished"]').value = new Date(response.data.dateFinished).toLocaleDateString();
    
   
    // Assuming 'response.data.thumbnail_url' is a string with the image URL
    let thumbnailUrl = response.data.thumbnail_url;

    // Creates a link element (<a>)
    let linkElement = document.createElement('a');
    linkElement.href = thumbnailUrl;
    linkElement.target = '_blank';
    linkElement.textContent = 'Clique aqui para visualizar a imagem atual';

    // Add a class to the link element
    linkElement.classList.add('btn');
    linkElement.classList.add('btn-warning');

    // Get the paragraph by ID and attach the link element to it
    let paragraphElement = document.querySelector('p[id="thumbnail_image"]');
    paragraphElement.appendChild(linkElement);
    })
  .catch(error => console.log(error))


/**
  * House Registration
  *
  * HTTP VERB: POST
  * BASE_URL: http://localhost:5000/houses
  */

function editHouse(request) {
    const headers = { headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": localStorage.getItem("_")
    }};

    axios.put(`${BASE_URL}/houses/${house_id}`, request, headers)
      .then(response => {
        // if ok
        window.location.href="/mine-houses"
      })
      .catch(error => console.error(error)); 
}


//DOM -- Manipulation of HTML to send information on forms and buttons
document.getElementById('btn-edit').addEventListener('click', function(event) {
    event.preventDefault();
    //Get values from inputs and assemble the request
    const request = new FormData;

    const price = document.querySelector('input[name="price"]').value;
    const dateInitial = document.querySelector('input[name="dateInitial"]').value;
    const dateFinished = document.querySelector('input[name="dateFinished"]').value;
    const description = document.querySelector('textarea[name="description"]').value;
    const thumbnail = document.querySelector('input[name="image"]').files[0];

    if(price) request.append("price", price);
    if(description) request.append("description", description);
    if(dateInitial) request.append("dateInitial", dateInitial);
    if(dateFinished) request.append("dateFinished", dateFinished);
    if(thumbnail) request.append("thumbnail", thumbnail);

    editHouse(request);
  });