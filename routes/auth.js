const {Router} = require('express');

const routes= Router();


routes.get('/',(req,res)=>{
    res.render("home")
})

routes.get('/signin',(req,res)=>{
    res.render("signin")
})

routes.get('/signup',(req,res)=>{
    res.render("signup")
})

module.exports=routes