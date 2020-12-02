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
        className={`btn cool-circle${todo.completed ? ' cool-circle--completed' : ''}`}>
          <span className="sr-only">complete todo</span>
        </button>
      <span>{todo.title}</span>
      <button className="btn btn--remove" onClick={handleRemoveTodo}>
        <span className="sr-only">remove todo</span>
      </button>
    </div>
  )
}
