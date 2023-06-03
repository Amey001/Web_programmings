//import the libraries
const express=require('express')
const app=express()
const bodyparser=require("body-parser");
const router=require("./router/routers.js");

//add middlewares
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

//configure the application


//add url handlers

app.use("/",router)

//start the server 
app.listen(3002,()=>{
    console.log("server has started at port no 3002");

})

module.exports=app;