import React, { useState } from 'react';
import './App.css';
import { IoCreate } from 'react-icons/io5'
import { AiOutlineClear } from 'react-icons/ai'

import Todo from './components/Todo.js';

let id = 1;

function App() {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([])

  function createTodo() {
    const newTodo = { title: title, id: id }
    
    if (title !== '') {
      setTitle('')
      setTodos([newTodo, ...todos])
      id += 1
    }
  }

  function clearTodos() {
    setTodos([])
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  function editTodo(todo, newTitle, setIsEdit) {
    const editedTodo = {...todo, title: newTitle}
    updatedEditTodos(editedTodo, setIsEdit)
  }

  function updatedEditTodos(editedTodo, setIsEdit) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === editedTodo.id) {
        return editedTodo
      }
      return todo
    })

    setTodos(updatedTodos)
    setIsEdit(false)
  }

  return (
    <div className="App">
      <div className="create-todo">
        <input className="input" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        <div className="create-todo-btn-container">
          <button className="create-btn" onClick={() => createTodo()}><IoCreate /></button>
          <button className="clear-btn" onClick={() => clearTodos()}><AiOutlineClear /></button>
        </div>
      </div>

      <div> 
        {todos.map(todo => <Todo key={todo.id} todo={todo} {...todo} deleteTodo={deleteTodo} editTodo={editTodo} />)}
      </div>
    </div>
  );
}

export default App;
