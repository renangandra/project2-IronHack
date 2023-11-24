if (localStorage.getItem("_")) {
    // if he is not logged in the signin, signUp items must be hidden from the menu
    document.getElementById('signin').classList.add("d-none");
    document.getElementById('signup').classList.add("d-none");

    // If he is logged in, the items mine house new house and logout should be displayed
    document.getElementById('mine-houses').classList.remove("d-none");
    document.getElementById('new-house').classList.remove("d-none");
    document.getElementById('logout').classList.remove("d-none");

    //The d-none class has the styling to hide a certain element.
    //So every time an element has this class it will be hidden.
    

  } else {
    // if he is not logged in the signin, signUp items must be hidden from the menu
    document.getElementById('signin').classList.remove("d-none");
    document.getElementById('signup').classList.remove("d-none");

    // If he is logged in, the items mine house new house and logout should be displayed
    document.getElementById('mine-houses').classList.add("d-none");
    document.getElementById('new-house').classList.add("d-none");
    document.getElementById('logout').classList.add("d-none");
  }

  // When clicking on logout it logs the user out, clearing the authentication token
  document.getElementById('logout').addEventListener('click', function(event) {
    localStorage.clear();
    window.location.href="/"
  });