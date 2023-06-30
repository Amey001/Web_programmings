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

router.get("/employee/employee/:eid",(req,resp)=>{
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

//using post to insert the data 
router.post("/employee/employee/:eid",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal;
    connection.query("insert into employee values (?,?,?)",[empid,ename,sal],(err,result)=>{
        console.log(result)
        if(err)
        {
            resp.status(500).send("no data found !!!"+JSON.stringify(err))
        }
        else{
            if(result.affectedRows>0)
            {
                resp.send("{'msg':'inserted successfully'}")    //priniting in json format 
            }
            else{
                resp.send("{'msg':'not inserted'}")
            }
        }
    })
})

//update the data we use put
router.put("/employee/employee/:eid",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal;
    connection.query("update employee set ename=?,sal=? where empid=?",[ename,sal,empid],(err,result)=>{
        console.log(result)
        if(err)
        {
            resp.status(500).send("no data found ",JSON.stringify(err));
        }
        else{
            if(result.affectedRows>0)
            {
                resp.send("{'msg':'updated successfully'}");
            }
            else{
                resp.send("{'msg':''not updated}")
            }
        }
    })
})

router.delete("/employee/employee/:eid",(req,resp)=>{
    connection.query("delete from employee where empid=?",[req.params.empid],(err,result)=>{
        if(err)
        {
            resp.status(500).send(" no data found ",JSON.stringify(err))
        }
        else{
            if(result.affectedRows>0)
            {
                resp.send("{'msg':'deleted successfully'}")
            }
            else{
                resp.send("{'msg':'not deleted'}")
            }
        }
    })
})


//export the module 
module.exports=router;


