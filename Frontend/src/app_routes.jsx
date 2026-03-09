import React from 'react'
import  { createBrowserRouter } from 'react-router'
import Login from './Features/Auth/Pages/Login'
import Register from './Features/Auth/Pages/Register'

export const router = createBrowserRouter([
    {
        path:'/Register',
        element :<Register/>
    },
    {
        path : "/Login",
        element : <Login/>
    }
])
