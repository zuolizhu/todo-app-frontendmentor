import Todo from './Todo'
import Loader from './Loader'
import useStore from '../store'
import { useEffect } from 'react'
import useFetch from '../Hooks/useFetch'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});


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

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={`todo-${todo.id}`} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <Todo key={todo.id} todo={todo} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}
