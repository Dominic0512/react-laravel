import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ToDoApp from './modules/todos/components/App'
import reducer from './modules/todos/reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>,
  document.getElementById('root')
)
