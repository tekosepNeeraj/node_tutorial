const fs=require("fs");

// fs.writeFileSync("./test.txt","Welcome in fs module");

// fs.writeFile("./test.txt","Asynchr call ",(err)=>{
// })

// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err)
//     }else{
//         console.log(result);
//     }
// })
fs.appendFileSync("./test.txt","This is fs append feature\n");

// fs.cpSync("./test.txt", "./copy.txt")
fs.unlinkSync("./contact.txt");