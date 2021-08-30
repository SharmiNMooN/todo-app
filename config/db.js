const mongoose = require("mongoose");


module.exports.connectDB = function(){

    const url = "mongodb+srv://sharmin:12345@cluster0.2jy8q.mongodb.net/todo_db?retryWrites=true&w=majority";

   return mongoose.connect(url,{
        
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

}