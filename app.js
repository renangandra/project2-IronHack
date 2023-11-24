// require('./DB');
const express = require('express');
const routesAuth = require('./routes/auth');
const hbs = require('hbs');
const path = require('path');


const app = express(); // to add values within express


app.use(express.json()) //enable the application to give the response in json format

app.use(express.urlencoded({ extended: false }));
// Normalizes the path to the views folder
app.set("views", path.join(__dirname, ".", "views"));// it will look in the root of the project
// Sets the view engine to handlebars
app.set("view engine", "hbs");// the entire view base will be through hbs --> install hbs
// Handles access to the public folder
app.use(express.static(path.join(__dirname, ".", "public")));//it will look for static files: css, html, images



app.use('/', routesAuth)// function to configure what express will use

app.listen(3000, ()=> { 
})