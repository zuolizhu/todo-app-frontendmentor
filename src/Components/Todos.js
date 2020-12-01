import Todo from './Todo'
import Loader from './Loader'
import useStore from '../store'
import { useEffect } from 'react'
import useFetch from '../Hooks/useFetch'

export default function Todos() {
  const { get, loading } = useFetch("http://my-json-server.typicode.com/zuolizhu/json-server-data/")
  const todos = useStore((state) => state.todos)
  const setTodos = useStore((state) => state.setTodos)

  useEffect(() => {
    get('todos')
    .then((data) => setTodos(data))
    .catch((error) => console.error(error))
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loading && <Loader />}
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  )
}
