const {Router} = require('express');

const routes= Router();


routes.get('/',(req,res)=>{
    res.render("index")
})

routes.get('/signin',(req,res)=>{
    res.render("signin")
})

routes.get('/signup',(req,res)=>{
    res.render("signup")
})

routes.get('/new-house',(req,res)=>{
    res.render("new-house")
})

routes.get('/edit-house/:id',(req,res)=>{
    res.render("edit-house")
})


routes.get('/mine-houses',(req,res)=>{
    res.render("mine-houses")
})

routes.get('/houses',(req,res)=>{
    res.render("houses")
})

module.exports=routes