import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

let fetchTodos = () => {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i)
    result.push(value)
    
  }
  return result
}

let App = () => {
  const [todos, setTodos] = useState(fetchTodos);
  const addTodo = (todo) => {
    localStorage.setItem(todo, todo)
    setTodos((currTodos) => {
      return [...currTodos, todo]
    })
  }
  const removeTodo = (todo) => {
    const result = todos.filter(todoItem => todoItem !== todo)
    setTodos(result);
    localStorage.removeItem(todo);
  }
  return (
    <>
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo}/>
      <TodoList todos={todos} onTodoRemove={removeTodo}/>
    </>
  )
}

export default App
