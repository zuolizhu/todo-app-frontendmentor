import useStore from '../store'

export default function Todo({ todo }) {
  const todos = useStore((state) => state.todos)
  const setTodos = useStore((state) => state.setTodos)

  const handleRemoveTodo = () => {
    const targetTodoId = todo.id
    setTodos(todos.filter(oldTodo => oldTodo.id !== targetTodoId))
  }

  const handleCompleteClick = () => {
    const targetTodoId = todo.id
    const updatedTodos = todos.map((todo) => {
      if (todo.id === targetTodoId) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  return (
    <div className="t-todo todo-item">
      <button
        onClick={handleCompleteClick}
        aria-label="complete todo"
        aria-pressed="true"
        className={`btn cool-circle${todo.completed ? ' cool-circle--completed' : ''}`}>
        </button>
      <p>{todo.title}</p>
      <button
        aria-label="complete todo"
        aria-pressed="true"
        className="btn btn--remove" onClick={handleRemoveTodo}>
      </button>
    </div>
  )
}
