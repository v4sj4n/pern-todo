import { useEffect, useState } from 'react'
import EditTodo from './EditTodo'

export default function ListTodos() {
  const [todos, setTodos] = useState([])

  // Delete button
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:4444/todos/${id}`, {
        method: 'DELETE',
      })
      setTodos(todos.filter((todo) => todo.todo_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }
  // Get all todos
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:4444/todos')
      const jsonData = await response.json()

      setTodos(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                {' '}
                <EditTodo todo={todo} />{' '}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
