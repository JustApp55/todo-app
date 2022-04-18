import '../App.css'
import { useState, useEffect } from 'react'
import {getTodos} from '../services/getRequests'
import Create from './Create.js'


 function Todos() {
    const [todos, setTodos] = useState([])
  
      useEffect(() => {
          getTodos()
        .then(res => setTodos(res.data))
      }, [])
    console.log(todos)

  

    return (
      <div className="App"> 
            <h1 className="nav">TõDø  Łist</h1>
            <h3></h3>
        <ul className="ul">
         {todos.map((todo) => {
            return(
               
                    <li>
                      <h3><a href={`/${todo._id}`}>{todo.description}</a></h3>                   
                    </li>
               
                );
            })}
        </ul>
            
            <h3 className="crt"><a href="/create">Create A To Do</a></h3>
      </div>
    );
  }

  export default Todos;