import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home"

import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import { AuthProvider } from './context/authContext'

const paths = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
           
      <RouterProvider router={paths}/>

    </AuthProvider>
    
  </React.StrictMode>,
)