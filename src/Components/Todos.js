import Loader from './Loader'
import useStore from '../store'
import InnerList from './InnerList'
import React, { useEffect, useState } from 'react'
import TodosFilter from './TodosFilter'
import useFetch from '../Hooks/useFetch'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import EmptyListHandler from './EmptyListHandler'



export default function Todos() {
  const { get, loading } = useFetch('https://my-json-server.typicode.com/zuolizhu/json-server-data/')
  const [isError, setIsError] = useState(false)
  const todos = useStore((state) => state.todos)
  const setTodos = useStore((state) => state.setTodos)
  useEffect(() => {
    get('todos')
    .then((data) => setTodos(data))
    .catch((error) => {
      console.log(error)
      setIsError(true)
    })
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed)
    return result
  }

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return
    }

    const updatedTodos = reorder(
      todos,
      result.source.index,
      result.destination.index
    )

    setTodos(updatedTodos)
  }

  if (loading) return <Loader />
  if (isError) return <EmptyListHandler isError={true} />
  if (todos.length === 0) return <EmptyListHandler />

  return (
    <div className="todos-wrap">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              className={`todos ${snapshot.isDraggingOver ? 'dragging' : ''}`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <InnerList todos={todos} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <TodosFilter />
    </div>
  )
}
