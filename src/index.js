import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import bookmarkApp from './reducers'
import App from './containers'

const store = createStore(bookmarkApp, applyMiddleware(thunk))

console.log(store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("node")
)
