import React from 'react'
import  { createBrowserRouter } from 'react-router'
import Login from './Features/Auth/Pages/Login'
import Register from './Features/Auth/Pages/Register'
import Protected from './Features/Auth/Component/Protected'

export const router = createBrowserRouter([
    {
        path:'/register',
        element :<Register/>
    },
    {
        path : "/login",
        element : <Login/>
    },
    {
        path :'/',
        element : <Protected><h1>Home Page</h1></Protected>
    }
])
