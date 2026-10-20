//body{
//title : string,
//description : string
//}

const zod = require("zod");
const { describe } = require("zod/v4/core");
const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}
