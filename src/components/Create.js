import '../App.css'
import { useNavigate } from 'react-router-dom'
import { createTodo } from '../services/getRequests.js'

export default function Create() {
    const nav = useNavigate()

    const newTodo = e => {
        e.preventDefault()
        const createTheTodo = {description: document.querySelector("#dsc").value, complete: false}
        createTodo(createTheTodo)
        nav ('/')
    }

    return (
        <div className="new">
            <h2 className="create"> Create A To Do</h2>
            <form onSubmit={newTodo}>
                <input type='text' name='description' id='dsc'>
                </input>
                <input type='submit' className="crsub"></input>
            </form>
        </div>
    )
}


