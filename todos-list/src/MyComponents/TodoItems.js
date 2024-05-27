import React from 'react'

export const TodoItems = ({todo , onDelete}) => {
  return (
    <div style = {{marginBottom: "50px"}}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick = {() =>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItems
