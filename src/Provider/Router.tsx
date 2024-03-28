import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from '../Routes/Signin'
import Signup from '../Routes/Signup'
import Home from '../Routes/Home'
import { Review } from '../Routes/Review'
import Nopage from '../Routes/Nopage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element:<Signup/>
  },
  {
    path: "/review",
    element: <Review/>
  },
  {
    path: "*",
    element: <Nopage/>
  },
])

const Router = () => {



  return (
    <RouterProvider router={router} />
  )
}

export default Router