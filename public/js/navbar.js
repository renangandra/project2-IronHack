if (localStorage.getItem("_")) {
    // se ele estiver logado os itens signin, signUp devem ser ocultados do menu
    document.getElementById('signin').classList.add("d-none");
    document.getElementById('signup').classList.add("d-none");

    //Se ele estiver logado os itens mine house new house e logout devem ser exibidos
    document.getElementById('mine-houses').classList.remove("d-none");
    document.getElementById('new-house').classList.remove("d-none");
    document.getElementById('logout').classList.remove("d-none");

    //A classe d-none possui a estilização para ocultar determinado elemento. 
    //Então toda vez que um elemento possuir essa classe ele será oculto.
    //Para fazer a lógica que citei, básicamente eu estou adicionando essa classe
    //em quem tem que ficar oculto e removendo ela de quem tem que ser visto

  } else {
    // se ele estiver logado os itens signin, signUp devem ser ocultados do menu
    document.getElementById('signin').classList.remove("d-none");
    document.getElementById('signup').classList.remove("d-none");

    //Se ele estiver logado os itens mine house new house e logout devem ser exibidos
    document.getElementById('mine-houses').classList.add("d-none");
    document.getElementById('new-house').classList.add("d-none");
    document.getElementById('logout').classList.add("d-none");
  }

  //Ao clicar em logout ele desloga o usuário limpando o token de autenticação
  document.getElementById('logout').addEventListener('click', function(event) {
    localStorage.clear();
    window.location.href="/"
  });