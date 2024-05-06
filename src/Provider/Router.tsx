import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useLocation } from 'react-router-dom'
import Signin from '../Routes/Signin'
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
import { Documents } from '../Routes/Documents'
import Signup from '../Routes/Signup'
import { PreSchool } from '../Routes/PreSchool'
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
        <Route path='/review' element={<Review />}></Route>
        <Route path='/preschool' element={<PreSchool />}></Route>
        <Route path='/school' element={<School />}>
          {/* <Route index element={<School />}></Route> */}
        </Route>
        <Route path='/university' element={<Covenant />}>
          <Route path=':universityid' element={<Covenant/>} />
        </Route>
        <Route path='/university' element={<Undergraduate />}>
          <Route path=':universityid?/undergraduate?' element={<Undergraduate/>} />
        </Route>
        <Route path='/university' element={<Postgraduate />}>
          <Route path=':universityid?/postgraduate?' element={<Postgraduate/>} />
        </Route>
        <Route path='/university' element={<Contact />}>
          <Route path=':universityid?/contact?' element={<Contact/>} />
        </Route>
         {/* <Route path='university/postgraduate' element={<Postgraduate />}></Route>
        <Route path='university/undergraduate' element={<Postgraduate />}></Route>  */}
        <Route path='/school/covenant-university/contact' element={<Contact />}></Route>
        <Route path='/school/covenant-university/usefulinks' element={<Uselinks />}></Route>
        <Route path='/school/covenant-university/documents' element={<Documents />}></Route>
        <Route path='/forgotpassword' element={<Forgotpassword />}></Route>
        <Route path='*' element={<Nopage />}></Route>
      </Routes>
    </AnimatePresence>
  )
}
export default Router