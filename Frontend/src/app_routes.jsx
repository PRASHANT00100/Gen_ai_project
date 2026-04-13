import React from 'react'
import  { createBrowserRouter } from 'react-router'
import Login from './Features/Auth/Pages/Login'
import Register from './Features/Auth/Pages/Register'
import Protected from './Features/Auth/Component/Protected'
import Home from './Features/interview/pages/Home'
import Interview from './Features/interview/pages/interview'

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
    },
    {
        path:'/interview/interview_id',
        element : <Protected><Interview/></Protected>
    }
])
