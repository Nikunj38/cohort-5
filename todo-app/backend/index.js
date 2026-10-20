const {createTodo, updateTodo} = reqiure("./types"); 

const { todo } = require("./db")

const express = require("express");
const zod = require("zod");
const app = express();


app.use(express.json());

//body{
//title : string,
//description : string
//}

app.post("/todo",  async function(req, res){
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg : "you sent the wrong input"
        })
        return;
    }
    //put in mongodb
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg : "you sent the wrong input"
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);