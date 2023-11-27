

const BASE_URL = "https://airbo-api.onrender.com"

function loadHouses(){
 
    let months = [
        "JAN", "FEB", "MAR", "APR",
        "MAY", "JUN", "JUL", "AUG",
        "SEP", "OCT", "NOV", "DEC"
      ];

    axios.get(`${BASE_URL}/houses-by-user`, { headers: {
        "Authorization": localStorage.getItem("_")
    }})
      .then(response => {
        // It goes through the array returned from the API and creates a list of cards with the information returned.
        if(response.data.length >0) {
            const html = response.data.map(index => `
                <div class="col-sm-3 mb-3">
                    <div class="card h-100">
                        <img class="card-img-top" src="${index.thumbnail_url}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${new Date(index.dateInitial).getDate()} ${months[new Date(index.dateInitial).getMonth()]} - ${new Date(index.dateFinished).getDate()} ${months[new Date(index.dateFinished).getMonth()]} <span class="badge text-bg-success tag-price">U$ ${index.price}</span> </h5>
                            <p class="card-text">${index.description}</p>
                        </div>
                        <div class="d-flex justify-content-around">
                        <button onclick="handleClickEdit(this)" id="btn-edit" data-value="${index._id}" class="btn btn-warning trash col-4 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                                Edit
                            </button>
                            <button onclick="handleClick(this)" id="btn-delete" data-value="${index._id}" class="btn btn-danger trash col-4 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                </svg>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        
            
            document.getElementById('list-houses').innerHTML = html;
        }
      })
      .catch(error => console.log(error))
}

loadHouses();

function handleClick(event){
    
    let house_id = event.getAttribute('data-value');
     axios.delete(`${BASE_URL}/houses/${house_id}`, { headers: {
        "Authorization": localStorage.getItem("_")
    }})
        .then(response => {
            loadHouses();
            alert("Delete Successful!")
        })
        .catch(error => console.log(error))
}

function handleClickEdit(event){
    //event.preventDefault();
    var house_id = event.getAttribute('data-value');
    localStorage.setItem("house", house_id)
    window.location.href="/edit-house"

if (!localStorage.getItem('_')) {
    window.location.href="/"
}}