import useStore from '../store'

export default function TodosFilter() {
  const todos = useStore((state) => state.todos)

  return (
    <div>
      <p>
        <span>
        {todos.reduce((counter, todo) => {
          if (!todo.completed) counter++
          return counter
        }, 0)} 
        </span> items left
      </p>
    </div>
  )
}
