const http=require("http");
const fs=require("fs");


const server=http.createServer((req,res)=>{
    const log=`${Date.now()} :  ${req.url} New rquiest recieve\n`;
    fs.appendFile("log.txt",log ,(err,data)=>{
        console.log("new request recieve");
        res.end("Hello from server");
        switch(req.url){
            case "/":
            res.end("This is Home Page");
            breake;
            case "/about":
            res.end("Hii this is neeraj");
            breake;
            default:
            res.end("Page not found");
        }
        });
    });
    
server.listen(8000,()=> console.log("server started"));