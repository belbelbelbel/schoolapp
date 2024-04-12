import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useLocation } from 'react-router-dom'
import Signin from '../Routes/Signin'
import Signup from '../Routes/Signup'
import Home from '../Routes/Home'
import { Review } from '../Routes/Review'
import Nopage from '../Routes/Nopage'
import { AnimatePresence } from "framer-motion"
import { School } from '../Routes/School'
import Forgotpassword from '../Routes/Forgotpassword'
import { Covenant } from '../Routes/Covenant'
import { Undergraduate } from '../Routes/Undergraduate'
import { Postgraduate } from '../Routes/Postgraduate'
import { Contact } from '../Routes/Contact'
import { Uselinks } from '../Routes/Uselinks'
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
  const location = useLocation()
  return (
    // <RouterProvider router={router} />
    <AnimatePresence>

      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/school'>
          <Route index element={<School />}></Route>
          <Route path='covenant-university' element={<Covenant />}></Route>
          <Route path='/school/covenant-university/undergraduate' element={<Undergraduate/>}></Route>
          <Route path='/school/covenant-university/postgraduate' element={<Postgraduate/>}></Route>
          <Route path='/school/covenant-university/contact' element={<Contact/>}></Route>
          <Route path='/school/covenant-university/usefulinks' element={<Uselinks/>}></Route>
        </Route>
        <Route path='/forgotpassword' element={<Forgotpassword />}></Route>
        <Route path='*' element={<Nopage />}></Route>
      </Routes>
    </AnimatePresence>
  )
}
export default Router