import React from 'react'
import { PacmanLoader } from 'react-spinners'

export const Loading = () => {
  return (
    <div style={{height:"100vh",width:"100%",backgroundColor: "whitesmoke", display:"flex",alignItems:"center",justifyContent:"center"}}><PacmanLoader color="#36d7b7" /></div>
  )
}