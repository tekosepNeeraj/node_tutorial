const express=require("express");
const port=8000;

const app=express();
app.get("/",(req,res)=>{
    return res.end("Hello from Home page");
})
app.get("/about",(req,res)=>{
    return res.end(`Hello ${req.query.name} `);
})


app.listen(port,()=> console.log("server is started on "+port))