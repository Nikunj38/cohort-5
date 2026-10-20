/*
* Tdod{
    title : string,
    description : string,
    completed : boolean 
}

*/

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:DH4EYBerO3YMHMVd@cluster0.tqvwx6b.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',  todoSchema);

module.exports = {
    todo
}