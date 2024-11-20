import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import { Login, SignUp } from './auth/auth'
import './index.css'

import {  createBrowserRouter,  RouterProvider} from "react-router-dom"


const paths = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: '/signup',
    element: <SignUp/>
  },

  {
    path: '/login',
    element: <Login/>
  },
 
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

           
      <RouterProvider router={paths}/>

    
  </React.StrictMode>,
)