const express=require("express");
const app=express();

app.use(express.static(__dirname + '/resource'));

app.get('/',(req,res)=>{
       res.sendFile(__dirname + "/resource/introduce_me.html")
})

app.listen(1999,(err)=>{
    if(err)console.log(err);
    else console.log("success");
})