import '../App.css'
import { useNavigate, useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { editTodo, getTodo } from '../services/getRequests.js'

export default function Edit() {
    const nav = useNavigate()
    const {id} = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        getTodo(id)
        .then(res => setData(res.data))
    }, [])

    const updateTheTodo = e => {
        e.preventDefault()
        const editTheTodo = {description: e.target.description.value, complete: e.target.complete.checked}
        editTodo(id, editTheTodo)
        nav(`/${id}`)
    }

    return (
        <div className="new">
             <h1 className="edit"> Edit ToDo</h1>
          <form onSubmit={updateTheTodo}>
             <input type='text' name='description' defaultValue={data.description}/> <br/>
              Complete: <input type='checkbox' name='complete' defaultChecked={data.complete} />
              <br/><br/>
            <input type='submit' />
          </form>
        </div>
    )
}

        
