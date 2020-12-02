import useStore from '../store'

export default function Todo({ todo }) {
  const todos = useStore((state) => state.todos)
  const setTodos = useStore((state) => state.setTodos)

  const handleRemoveTodo = () => {
    const targetTodoId = todo.id
    setTodos(todos.filter(oldTodo => oldTodo.id !== targetTodoId))
  }
  return (
    <div className="t-todo">
      <button></button>
      <span>{todo.title}</span>
      <button className="btn btn-remove" onClick={handleRemoveTodo}>
        <span className="sr-only">remove todo</span>
      </button>
    </div>
  )
}
