import React from 'react'
import  { createBrowserRouter } from 'react-router'
import Login from './Features/Auth/Pages/Login'
import Register from './Features/Auth/Pages/Register'
import Protected from './Features/Auth/Component/Protected'
import Home from './Features/interview/pages/Home'

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
        element : <Protected><Home/></Protected>
    }
])
