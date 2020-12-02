import useStore from '../store'
import FilterRadio from './FilterRadio'

export default function TodosFilter() {
  const todos = useStore((state) => state.todos)
  const setTodos = useStore((state) => state.setTodos)

  const handleClearCompletedClick = () => setTodos(todos.filter(({ completed }) => completed === false))

  return (
    <div className="todos-filter">
      <p className="todos-status t-status">
        <span>
        {todos.reduce((counter, todo) => {
          if (!todo.completed) counter++
          return counter
        }, 0)} 
        </span> items left
      </p>
      <FilterRadio />
      <button
        onClick={handleClearCompletedClick}
        className="t-status btn btn--clear-completed">Clear Completed</button>
    </div>
  )
}
