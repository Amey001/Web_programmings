//importing the library
 
const http=require('http')
const url=require('url')

function processrequest(req,resp)
{
    //parsing the url 
    var q=url.parse(req.url,true)
    resp.writeHeader(200,{"content-type":"text/html"})
    switch(q.pathname){
        case "/home":
            resp.write("<h1>Welcome to Home Page</h1>");
            resp.end()
            break;
        case "/about us":
            resp.write("<h3>Welcome to About us </h3>")
            resp.end("<h3>Testing Server With switch case</h3>")
            break;
        default:
            resp.write("<h2>In some other page</h2>")
            resp.end()
            break;
    }

}
//create a server
var server=http.createServer(processrequest)
//start the server 
server.listen(3002,()=>{
    console.log("server has started at port no 3002 !!")
})
