import '../App.css'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getTodo, deleteToDo} from '../services/getRequests.js'

export default function Show() {
    const nav = useNavigate()
    const {id} = useParams()
    const [todo, setTodo] = useState({})

    useEffect(() => {
        getTodo(id)
        .then(res => setTodo(res.data))
    }, [])

    const deleteTheToDo = () => {
        deleteToDo(id)
        nav('/')
      }
      
    return (
      <div className="show">
            <h2> ToDo </h2>
            <h3> {todo.description} </h3> <br/>
            Completed: <input type='checkbox' checked={todo.complete} /> <br/>
            <button onClick={() => {nav(`/${id}/edit`)}}  className="editBt">Edit Todo</button>
            <button onClick={deleteTheToDo} className="del"> Delete </button>
      </div>
    )
}

