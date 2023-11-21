// require('./DB');
const express = require("express"); // chamando ele pra funcionanr aqui dentro
const routesAuth = require("./routes/auth"); // colocar as rotas em 2 lugar

const hbs = require("hbs");
// const connectDB = require('./DB');
const path = require("path");

const app = express(); //pra adicionar valores dentro do express e pois eu posso reutiliza-lo

app.use(express.json()); //habilitar o aplicativo para dar a resposta em formato tipo json

app.use(express.urlencoded({ extended: false }));
// Normalizes the path to the views folder
app.set("views", path.join(__dirname, ".", "views")); // ele vai procurar na raiz do projeto
// Sets the view engine to handlebars
app.set("view engine", "hbs"); // toda a base do view vai ser pelo hbs --> instalar o hbs
// Handles access to the public folder
app.use(express.static(path.join(__dirname, ".", "public"))); //ele vai procurar os arquivos estaticos: css, html, imagens

//any change

app.use("/", routesAuth); // funcao pra configurar o que o express vai utilizar

app.listen(3000, () => {
  //inicializar o servidor. 1: numero da porta, 2: funcao pra ser executada quandop o servidor estiver rodando
  console.log("server running");
});
