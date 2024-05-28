import React, { ReactNode, useContext } from 'react'
import { Context } from '../Provider/Usecontext'
import { Navigate, useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({children}:any) => {
    const navigate = useNavigate()
    const user = useContext(Context)
    if (!user?.isLoggedIn) {
        return navigate("/signin");
    }
  return (
    children
  )
}
