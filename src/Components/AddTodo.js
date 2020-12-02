import useStore from '../store'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useFetch from '../Hooks/useFetch'

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const todos = useStore((state) => state.todos)
  const [isFocus, setIsFocus] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const setTodos = useStore((state) => state.setTodos)
  const { post } = useFetch('https://my-json-server.typicode.com/zuolizhu/json-server-data/')

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value)
  }

  const handleOnInputFocus = () => setIsFocus(true)
  
  const handleOnInputBlur = () => setIsFocus(false)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (newTodo.length < 2) return
      
      setIsAdding(true)
      
      post('todos', {
        userId: 1,
        title: newTodo,
        completed: false
      })
      .then(data => {
        if (data) {
          setTodos([...todos, {
            userId: 1,
            id: uuidv4(),
            title: newTodo,
            completed: false
          }])
          setNewTodo('')
          setIsAdding(false)
        }
      })
      .catch(error => {
        setIsAdding(false)
        console.error(error)
      })
    }
  }

  return (
    <div className="input-box">
      <div className={`cool-circle${isFocus ? ' focusing' : ''}`}></div>
      <label className="sr-only" htmlFor="newTodo">add new todo</label>
      <input 
        type="text" 
        id="newTodo"
        name="newTodo"
        value={newTodo}
        disabled={isAdding}
        onKeyDown={handleKeyDown}
        onBlur={handleOnInputBlur}
        className="input-box__input"
        onFocus={handleOnInputFocus}
        onChange={handleNewTodoChange}
        placeholder="Create a new todo…" 
      />
    </div>
  )
}
