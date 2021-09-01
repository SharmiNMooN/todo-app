const { Router } = require("express");
const todoModel  = require("../model/todo.model.js")


const router = Router();

//api for save todo
router.post('/api/v1.0.0/todos',async(req,res)=>{
    const payload = req.body;
    if(!payload.title){
        return res.status(400).send({
            success: false,
            message: "title is required"
        })
    }

    const createdTodo = await todoModel.create(payload);
    return res.send({
        success: true,
        message: "Todo created  sucessfully",
        data: createdTodo 
    })

    
});


//api for get todos
router.get('/api/v1.0.0/todos',async(req,res)=>{
    
});



//api for get todo
router.get('/api/v1.0.0/todos/:id',async(req,res)=>{
    
});

//api for Patch todo
router.patch('/api/v1.0.0/todos/:id',async(req,res)=>{
    
});



//api for delete todo
router.delete('/api/v1.0.0/todos/:id',async(req,res)=>{
    
});

module.exports = router;