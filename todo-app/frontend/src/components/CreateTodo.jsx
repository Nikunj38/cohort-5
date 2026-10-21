import { useState } from "react"

export function CreateTodo() {
    //react-query
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    return <div>
        <input style={{
            padding: 10,
            margin : 10
        }}
        id = "title" type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value)
        }}></input><br />

        <input style={{
            padding: 10,
            margin : 10
        }}
        id="description" type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value)
        }}></input><br />

        <button style={{
            padding: 10,
            margin : 10
        }} onClick={() => {
            fetch("http://localhost:3000/todo",{
                method : "POST",
                body : JSON.stringify({
                    //don't this coz the whole reason of using react is to get rid of this rather check line 4 : react-query
                    // title: document.getElementById(title).innerHTML,
                    // description : document.getElementById(ti
                    // console.log(e.target)tle).innerHTML

                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res){
                    const json = await res.json()
                    alert("TODO added")
                })
        }} >Add a todo</button>
    </div>
}