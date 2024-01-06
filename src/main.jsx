import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import store from './app/store.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    <ToastContainer
      theme="dark"
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseHover={false} />                  
    
    </div>
  </React.StrictMode>,
)
