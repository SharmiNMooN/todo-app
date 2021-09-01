const express = require("express");
const app = express();
const {connectDB} = require("./config/db.js");
const todoRoute = require("./routes/todo.route");
connectDB().then(()=>{

    console.log("Database is connected");
})


const  port = 3000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.get("/",(req,res)=>{
    return res.send({
        message: "WELCOME TO OUR TODO APPLICATION"
    })
})
app.use("/",todoRoute);



app.listen(port,()=>{

    console.log(`Application is running port ${port}`)
});