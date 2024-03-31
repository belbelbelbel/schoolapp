import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useLocation } from 'react-router-dom'
import Signin from '../Routes/Signin'
import Signup from '../Routes/Signup'
import Home from '../Routes/Home'
import { Review } from '../Routes/Review'
import Nopage from '../Routes/Nopage'
import {AnimatePresence} from "framer-motion"
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "/signin",
//     element: <Signin />
//   },
//   {
//     path: "/signup",
//     element:<Signup/>
//   },
//   {
//     path: "/review",
//     element: <Review/>
//   },
//   {
//     path: "*",
//     element: <Nopage/>
//   },
// ])

const Router = () => {
  const location   = useLocation()
  return (
    // <RouterProvider router={router} />
<AnimatePresence>
<Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/review' element={<Review/>}></Route>
      <Route path='*' element={<Nopage/>}></Route>
    </Routes>
</AnimatePresence>
  )
}
export default Router