import React from 'react'

export default function Todo({todo, toggleTodo}) {

    function handleTodoClick() {
        toggleTodo(todo.id)
    }
  return (
    <div class="todo-container">
        <label>
        <input class="todo-checkbox" type="checkbox" checked={todo.complete} onChange = {handleTodoClick}/>
        {todo.name}
        </label>
    </div>
  )
}
