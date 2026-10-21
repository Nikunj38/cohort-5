import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodo] = useState([])
  

  //not the right way to do, coz this will cause infinite request problem
  //better to use useEffect hook
  
  // fetch("http://localhost:3000/todos")
  //   .then(async function(res){
  //     const json = await res.json();
  //     setTodo(json.todos)
  //   })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
