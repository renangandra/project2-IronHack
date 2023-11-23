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

// Axios GET request to fetch the list of houses
axios
  .get(`${BASE_URL}/houses`)
  .then((response) => {
    // Mapping each house to HTML content
    let html = response.data.map(
      (index) => `
                <div class="col-4 col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src="${
                          index.thumbnail_url
                        }" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${new Date(
                              index.dateInitial
                            ).getDate()} ${
        months[new Date(index.dateInitial).getMonth()]
      } - ${new Date(index.dateFinished).getDate()} ${
        months[new Date(index.dateFinished).getMonth()]
      } <span class="badge text-bg-success tag-price">U$ ${
        index.price
      }</span> </h5>
                            <p class="card-text">${index.description}</p>
                        </div>
                    </div>
                </div>
            `
    );

    // Inserting the generated cards into the HTML of the page
    document.getElementById("list-houses").innerHTML = html.join("");
  })
  .catch((error) => console.log(error)); // Logging error in case of a failed request
