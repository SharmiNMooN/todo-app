const express = require("express");
const app = express();


const  port = 3000;

app.get("/",(req,res)=>{
    return res.send({
        message: "WELCOME TO OUR TODO APPLICATION"
    })
})



app.listen(port,()=>{

    console.log(`Application is running port ${port}`)
});