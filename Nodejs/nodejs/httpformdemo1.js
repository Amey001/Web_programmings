//import libraries http,fs,url,and formmodule
const http=require('http') 
const url=require('url') 
const fs=require('fs') 
const m1=require('./formmodule')

//create server 
const server=http.createServer(function(req,resp)
{
    //parse the url and separate the url and the data in the query string
    var q=url.parse(req.url,true)   //q has querystring 
    resp.writeHeader(200,{'content-type':'text/html'})

    switch(q.pathname)
    {
        case '/form':
            var rs=fs.createReadStream('./public/form.html')
            rs.pipe(resp);
            break;
        case '/submit-data':
            if(q.query.btn==='add')
            {
                var num1=parseInt(q.query.num1);
                var num2=parseInt(q.query.num2);
                var ans=m1.addition(num1,num2);
                resp.write("<h1>Addition of numbers :"+ans+"</h1>")

            }
            else{
                var num1=parseInt(q.query.num1);
                var fact=m1.factorial(num1);
                resp.write("<h1> Factorial :: "+fact+" </h1>");
            }
            resp.end();
            break;
        default:
            resp.write(" in other Page !!!");
            resp.end(" use /form url ");
            break;
    }

});

//start the server 
server.listen(3002,function()
{
    console.log("server has Started on port no :: 3002");

})