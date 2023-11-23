// Base URL for the API calls
const BASE_URL = "http://localhost:5000";

// Function to load and display houses
function loadHouses() {
  // Array mapping month numbers to their names
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

  // Axios GET request to fetch houses associated with a user
  axios
    .get(`${BASE_URL}/houses-by-user`, {
      headers: {
        // Using authorization token from local storage
        Authorization: localStorage.getItem("_"),
      },
    })
    .then((response) => {
      // Mapping each house to a card-like HTML structure
      let html = response.data.map(
        (house) => `
        <div class="col-sm-4">
            <div class="card">
                <img class="card-img-top" src="${
                  house.thumbnail_url
                }" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${new Date(
                      house.dateInitial
                    ).getDate()} ${
          months[new Date(house.dateInitial).getMonth()]
        } - ${new Date(house.dateFinished).getDate()} ${
          months[new Date(house.dateFinished).getMonth()]
        } <span class="badge text-bg-success tag-price">U$ ${
          house.price
        }</span></h5>
                    <p class="card-text">${house.description}</p>
                </div>
                <div class="d-flex justify-content-around">
                    <a href="/edit-house/${
                      house._id
                    }" class="btn btn-warning trash col-4 mb-3">Edit</a>
                    <button onclick="handleClick(this)" id="btn-delete" data-value="${
                      house._id
                    }" class="btn btn-danger trash col-4 mb-3">Remove</button>
                </div>
            </div>
        </div>
      `
      );

      // Inserting the generated house cards into the 'list-houses' element
      document.getElementById("list-houses").innerHTML = html.join("");
    })
    .catch((error) => console.log(error)); // Logging any errors
}

// Initial call to load houses when the script runs
loadHouses();

// Function to handle the click event for deleting a house
function handleClick(event) {
  let house_id = event.getAttribute("data-value");

  // Axios DELETE request to remove the specific house
  axios
    .delete(`${BASE_URL}/houses/${house_id}`, {
      headers: {
        // Using authorization token from local storage
        Authorization: localStorage.getItem("_"),
      },
    })
    .then((response) => {
      // Reload houses and show confirmation after successful deletion
      loadHouses();
      alert("Delete Successful!");
    })
    .catch((error) => console.log(error)); // Logging any errors
}

// Redirect to home page if the user is not authorized
if (!localStorage.getItem("_")) {
  window.location.href = "/";
}
