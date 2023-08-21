import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import router from './router.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <App/>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
