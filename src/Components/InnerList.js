import React from 'react'
import Todo from './Todo'
import useStore from '../store'
import { Draggable } from 'react-beautiful-dnd'

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  ...draggableStyle
});

const InnerList = React.memo(function InnerList({ todos }) {
  const filter = useStore((state) => state.filter)
  
  const todoFilter = (todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    if (filter === '') return todo
  }

  return todos
  .filter(todoFilter)
  .map((todo, index) => (
    <Draggable key={todo.id} draggableId={`todo-${todo.id}`} index={index}>
      {(provided, snapshot) => (
        <div
          className={`todo${todo.completed ? ' completed' : ''}`}
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
  ))
})

export default InnerList
