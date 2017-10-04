import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../styles/todos.css'

const ToDoApp = () => (
  <div className="todo-container">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default ToDoApp
