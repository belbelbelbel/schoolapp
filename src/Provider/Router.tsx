import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes, useLocation } from 'react-router-dom'
import Signin from '../Routes/Signin'
import Home from '../Routes/Home'
import Nopage from '../Routes/Nopage'
import { AnimatePresence } from "framer-motion"
import { School } from '../Routes/School'
import Forgotpassword from '../Routes/Forgotpassword'
import Signup from '../Routes/Signup'
import { PreSchool } from '../Routes/PreSchool'
import { Programs } from '../Routes/Programs'
import { useContext } from 'react'
import { Context } from './Usecontext'
import { Userprofile } from '../Routes/Userprofile'
import { About } from '../Routes/About'
import { Verification } from '../Routes/Verification'
import Cookies from 'js-cookie'
import { VerifyModal } from '../Routes/VerifyModal'
import { ContactUs } from '../Routes/ContactUs'
import { ResetPassword } from '../Routes/ResetPassword'
import { ConfirmPassword } from '../Routes/ConfirmPassword'
import { SchoolPage } from '../Routes/SchoolPage'
import { Programs2 } from '../Routes/Programs2'
import { Undergraduate2 } from '../Routes/Undergraduate2'
import { Postgraduate2 } from '../Routes/Postgraduate2'
import { Contact2 } from '../Routes/Contact2'
import { Dates2 } from '../Routes/Dates2'
import { Documents2 } from '../Routes/Documents2'
import { Links } from '../Routes/Links'
import { Exam2 } from '../Routes/Exam2'
import { Fees2 } from '../Routes/Fees2'
import { Faq2 } from '../Routes/Faq2'
import { Undergraduatesprog } from '../Routes/Undergraduatesprog'
import { Postgraduatesprog } from '../Routes/Postgraduatesprog'
import { ProgramPost } from '../Routes/ProgramPost'
import { Fluid3 } from '../Routes/Fluid3'


const Router = () => {
  const user = useContext(Context)
  const location = useLocation()
  const token = Cookies.get('token')
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/userprofile' element={<Userprofile />}></Route>
        (<Route path='/signin' element={<Signin />}></Route>)
        <Route path='/school' element={token ? <School /> : <Navigate to="/signin" />}></Route>
        (<Route path='/preschool' element={token ? <PreSchool /> : <Navigate to="/signin" />}></Route>)
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/verifymodal' element={<VerifyModal />}></Route>
        <Route path='/resetpassword' element={<ResetPassword />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/reset-password' element={<ConfirmPassword />}></Route>
        <Route path='/university' element={token ? <SchoolPage /> : <Navigate to="/signin" />}>
          <Route path=':universityid' element={token ? <SchoolPage /> : <Navigate to="/signin" />}>
          </Route>
        </Route>
        <Route path='/university' element={token ? <Programs /> : <Navigate to="/signin" />}>
          <Route path=':universityid' element={token ? <Programs /> : <Navigate to="/signin" />}>
            <Route path=':schoolid' element={token ? <Programs /> : <Navigate to="/signin" />}></Route>
          </Route>
        </Route>
        <Route path='/university' element={token ? <ProgramPost /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/programs?' element={token ? <ProgramPost /> : <Navigate to="/signin" />}>
          </Route>
        </Route>
        <Route path='about' element={<About />}></Route>
        <Route path='/university' element={token ? <Undergraduate2 /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/undergraduate?' element={token ? <Undergraduate2 /> : <Navigate to="/signin"  />} />
        </Route>
        <Route path='/university' element={token ? <Undergraduatesprog /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/undergraduateprogram?' element={token ? <Undergraduatesprog /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Postgraduatesprog /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/postgraduateprogram?' element={token ? <Postgraduatesprog /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Faq2 /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/faq' element={token ? <Faq2 /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Dates2 /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/date' element={token ? <Dates2 /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Links /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/links' element={token ? <Links /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Fees2 /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/fees' element={token ? <Fees2 /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Programs2 /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/colleges' element={token ? <Programs2 /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Exam2 /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/exam' element={token ? <Exam2/> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Fluid3 /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/fluids' element={token ? <Fluid3 /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Postgraduate2 /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/postgraduate?' element={token ? <Postgraduate2 /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Contact2 /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/contact?' element={token ? <Contact2 /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Documents2 /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/documents?' element={token ? <Documents2 /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/forgotpassword' element={<Forgotpassword />}></Route>
        <Route path="/verification" element={<Verification />} />
        <Route path='*' element={<Nopage />}></Route> 

      </Routes>
    </AnimatePresence>
  )
}
export default Router