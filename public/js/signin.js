function login(request){
    axios.post(`${BASE_URL}/sessions`, request)
        .then(response => {
            // SE DEU CERTO
            //TODO: Adicionar as informações que estao no response no localStorage
            window.location.href="http://localhost:3000/mine-houses";
        })
        .catch(error => console.error(error)); //SE DEU MERDA
}

//DOM -- Manupulação do HTML para Envio das informações dos formulários e botões
document.getElementById('btnSignin').addEventListener('click', function(event) {
    event.preventDefault();
    //Pegar valores dos inputs e montar a request
    const request = {
        email: document.querySelector('input[name="email"').value,
        password: document.querySelector('input[name="password"').value
    }
    //Chamar AXIOS
    login(request);
  });