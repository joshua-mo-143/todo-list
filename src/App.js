import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'

function App() {
  const LOCAL_STORAGE_KEY = 'todoApp.todos'
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

// store current list as a json local storage key
  useEffect(() => {

    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    
    if (storedTodos) setTodos(storedTodos)},[])

    useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
      const name = todoNameRef.current.value
      if (name === "") return 
      setTodos(previousTodos => {
        return [...previousTodos, {id: uuidv4(), name: name, complete: false}]
      })
      console.log(name)
      todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  // full layout
  return (
    <div class="appContainer">
    <div class="items-left">{todos.filter(todo => !todo.complete).length} left to do</div>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input class="todo-input" ref={todoNameRef} type="text"></input>
    <button class="btn-add" onClick={handleAddTodo}>+</button>
    <button class="btn-clearcompleted"onClick={handleClearTodos}>Clear Completed</button>
    </div>
  )
}

export default App;
