const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnect");


//url handlers 
router.get("/employees",(req,resp)=>{
    connection.query("select * from employee",(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send(" no data found "+JSON.stringify(err));
        }
        else{
            resp.send(data)
        }
    })
})

router.get("/employees/employee/:empid",(req,resp)=>{
    connection.query("select * from employee where empid=?",[req.params.empid],(err,data,field)=>{
        if(err)
        {
            resp.status(500).send(" no data found !!",JSON.stringify(err))
        }   
        else{
            resp.send(data[0])
        }
    })
})



//export the module 
module.exports=router;


