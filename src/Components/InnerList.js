import React from 'react'
import Todo from './Todo'
import { Draggable } from 'react-beautiful-dnd'

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  ...draggableStyle
});

const InnerList = React.memo(function InnerList({ todos }) {
  return todos.map((todo, index) => (
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
