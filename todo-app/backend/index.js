import {createTodo, updateTodo} from types

const express = require("express");
const zod = require("zod");
const app = express();


app.use(express.json());

//body{
//title : string,
//description : string
//}

app.post("/todo",  function(req, res){

})

app.get("/todos",  function(req, res){
    
})

app.post("/completed",  function(req, res){
    
})

app.listen(3000);