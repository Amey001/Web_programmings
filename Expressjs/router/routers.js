//import modules
const express=require("express");
const router=express.Router(); //router is a class and its object is created as router
const connection=require("../db/dbconnect")

router.get("/employees",(req,resp)=>{
    connection.query("select * from employee",(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send("no data found"+JSON.stringify(err))
        }
        else{
            resp.render("index",{empdata:data});
        }

    })
})
//display blank form to user
router.get("/displayaddform",(req,resp)=>{
    resp.render("add_emps");
})

//insert new record 
router.post("/insertemployees",(req,resp)=>{
    var empid=resp.body.empid;
    var ename=resp.body.ename;
    var sal=resp.body.sal;
    connection.query("insert into employees values(?,?,?)",[empid,ename,sal]),(err,result)=>{
        if(err)
        {
            resp.status(500).send("no data found !! "+JSON.stringify(err))
        }
        else{
            resp.redirect("/employees")
        }
    }
})

//edit the data of the table 
router.get()


