import { useState } from "react"
import "./style.css"

export default function App() {
    const[newItem, setNewItem] = useState("")
    const[todos, setTodos] = useState([])
    
    function handleSubmit(e) {
      e.preventDefault()

      setTodos(currentTodos => {
        return[
        ...currentTodos,
        { id:crypto.randomUUID(), title: newItem, completed: false}
        ]
      })
      
      setNewItem("")
    }

    function toggleTodo(id, completed) {
      setTodos(currentTodos => {
        return currentTodos.map(todo => {
          if {todo.id === id} {
            return {...todo, completed:}
          }
        })
      })
    }

    return (
  <>
    <form onSubmit={handleSubmit} className="new-item-form">
    <div>
    <label htmlFor="new-item">New Item </label>
    <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" name="" id="new-item" />
    <button className="btn">Add</button>
    </div>
  </form>
  <h1 className="header"> </h1>
  <ul className="list">
    {todos.map(todo => {
      return (
      <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} 
        onChange={e => toggleTodo(todo.id, e.target.checked)}/>
        {todo.title}
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
      )
    })}
  </ul>
  </>
)

}