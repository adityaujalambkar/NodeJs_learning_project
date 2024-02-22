//import http library
const http=require('http');


//creating server
const server=http.createServer((req,res)=>{

    if(req=="/aju"){
        res.end("welcome to server ");
    }else{
     res.end("welcome to server Aju Started");
    }
})

server.listen(3100,()=>{
    console.log("server started");
});