// Base URL for API requests
const BASE_URL = "http://localhost:5000";

// Array mapping month numbers to their abbreviations
let months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

// Current URL, typically you would use window.location.href in a live environment
let currentUrl = "http://localhost:3000/edit-house/655dd6c69445af3ec3f8f46c";

// Splitting the URL to extract the house ID (the last segment of the URL)
let segments = currentUrl.split("/");
let house_id = segments[segments.length - 1];

// Axios GET request to fetch details of a specific house
axios
  .get(`${BASE_URL}/houses/${house_id}`, {
    headers: {
      // Using a token from local storage for authorization
      Authorization: localStorage.getItem("_"),
    },
  })
  .then((response) => {
    // Filling in the form fields with the data received from the response
    document.querySelector('input[name="price"]').value = response.data.price;
    document.querySelector("textarea").value = response.data.description;
    document.querySelector('input[name="dateInitial"]').value = new Date(
      response.data.dateInitial
    );
    document.querySelector('input[name="dateFinished"]').value = new Date(
      response.data.dateFinished
    );

    // Creating a hyperlink to the thumbnail image of the house
    let thumbnailUrl = response.data.thumbnail_url;
    let linkElement = document.createElement("a");
    linkElement.href = thumbnailUrl;
    linkElement.target = "_blank";
    linkElement.textContent = "Click here to view the current image";
    linkElement.classList.add("btn", "btn-warning");
    let paragraphElement = document.querySelector('p[id="thumbnail_image"]');
    paragraphElement.appendChild(linkElement);
  })
  .catch((error) => console.log(error));

// Function to handle the editing of house details
function editHouse(request) {
  // Configuration for the PUT request including headers
  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: localStorage.getItem("_"),
  };

  // Axios PUT request to update the house details
  axios
    .put(`${BASE_URL}/houses/${house_id}`, request, { headers })
    .then((response) => {
      // Redirect to another page upon successful update (uncomment the next line to enable)
      // window.location.href = "/mine-houses";
    })
    .catch((error) => console.error(error)); // Logging error in case of a failed request
}

// Adding click event listener to the edit button
document.getElementById("btn-edit").addEventListener("click", function (event) {
  event.preventDefault(); // Preventing the default form submission behavior

  // Gathering data from form fields
  const request = new FormData();
  let price = document.querySelector('input[name="price"]').value;
  let dateInitial = document.querySelector('input[name="dateInitial"]').value;
  let dateFinished = document.querySelector('input[name="dateFinished"]').value;
  let description = document.querySelector("textarea").value;
  let thumbnail = document.querySelector('input[name="image"]').files[0];

  // Appending data to the FormData object
  if (price) request.append("price", price);
  if (description) request.append("description", description);
  if (dateInitial) request.append("dateInitial", dateInitial);
  if (dateFinished) request.append("dateFinished", dateFinished);
  if (thumbnail) request.append("thumbnail", thumbnail);

  // Calling the editHouse function with the request data
  editHouse(request);
});
