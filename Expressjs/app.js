//import modules
const express=require('express');
const app=express();
const path=require('path')
const bodyparser=require('body-parser');
const routes=require("./router/routers");


//add middleware
app.use(bodyparser.urlencoded({extended:false}));

//configure the project 

app.set("views",path.join(__dirname,"views"))
app.set("view-engine","ejs");

//add url handler
app.use("/",routes)

//start the server 
app.listen(3002,()=>{
    console.log("sever started at port no 3002 !!")
})

