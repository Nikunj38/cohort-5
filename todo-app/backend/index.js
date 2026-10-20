const {createTodo, updateTodo} = reqiure("./types"); 

const express = require("express");
const zod = require("zod");
const app = express();


app.use(express.json());

//body{
//title : string,
//description : string
//}

app.post("/todo",  function(req, res){
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg : "you sent the wrong input"
        })
        return;
    }
    //put in mongodb
})

app.get("/todos",  function(req, res){
    const updatePayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg : "you sent the wrong input"
        })
        return;
    }
})

app.post("/completed",  function(req, res){
    
})

app.listen(3000);