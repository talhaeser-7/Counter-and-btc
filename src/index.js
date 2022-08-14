import React from "react"
import { createRoot } from 'react-dom/client'
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./store"

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

createRoot(document.getElementById('root')).render(app)

