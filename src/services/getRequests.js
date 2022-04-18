import axios from "axios"

export const getTodos = () => {
    const URL = 'http://localhost:3001/todos'
    const response = axios.get(URL)
    return response
}

export const getTodo = (id) => {
    const URL = `http://localhost:3001/todos/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteToDo = (id) => {
    const URL = `http://localhost:3001/todos/${id}`
    const response = axios.delete(URL)
    return response
}

export const createTodo = (add) => {
    const URL = 'http://localhost:3001/todos'
    const response = axios.post(URL, add)
    return response
}


export const editTodo = (id, updateTheTodo) => {
    const URL = `http://localhost:3001/todos/${id}`
    const response = axios.put(URL, updateTheTodo)
    return response
}

