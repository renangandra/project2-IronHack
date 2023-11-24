
const BASE_URL = "https://airbo-api.onrender.com"

let months = [
    "JAN", "FEB", "MAR", "APR",
    "MAY", "JUN", "JUL", "AUG",
    "SEP", "OCT", "NOV", "DEC"
  ];
  
axios.get(`${BASE_URL}/houses`)
  .then(response => {
    if(response.data.length > 0){
        // It goes through the array returned from the API and creates a list of cards with the information returned.
        const html = response.data.map(index => `
          <div class="col-3 col-sm-3 mb-3">
              <div class="card h-100">
                  <img class="card-img-top" src="${index.thumbnail_url}" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title">${new Date(index.dateInitial).getDate()} ${months[new Date(index.dateInitial).getMonth()]} - ${new Date(index.dateFinished).getDate()} ${months[new Date(index.dateFinished).getMonth()]} <span class="badge text-bg-success tag-price">U$ ${index.price}</span> </h5>
                      <p class="card-text">${index.description}</p>
                  </div>
              </div>
          </div>`).join('');

      // Insert the cards we created in the div with this ID on the houses page
      document.getElementById('list-houses').innerHTML = html;
    }
  })
  .catch(error => console.log(error))


    