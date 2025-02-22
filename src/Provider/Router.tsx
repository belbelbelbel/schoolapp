import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Signin from '../pages/Auth/Signin'
import Home from '../pages/Routes/Home'
import Nopage from '../pages/components/Nopage'
import { AnimatePresence } from "framer-motion"
import { School } from '../pages/Routes/School'
import Forgotpassword from '../pages/Auth/Forgotpassword'
import Signup from '../pages/Auth/Signup'
import { Dashboard } from '../pages/sideBar/Dashboard'
import { useContext } from 'react'
import { Context } from './Usecontext'
import { About } from '../pages/sideBar/About'
import { Verification } from '../pages/Auth/Verification'
import Cookies from 'js-cookie'
import { ContactUs } from '../pages/sideBar/ContactUs'
import { ResetPassword } from '../pages/Auth/ResetPassword'
import { ConfirmPassword } from '../pages/Auth/ConfirmPassword'
import { SchoolPage } from '../pages/Routes/SchoolPage'
import { Undergraduate } from '../pages/Routes/Undergraduate'
import { Postgraduate } from '../pages/Routes/Postgraduate'
import { Contact } from '../pages/Routes/Contact'
import { Dates2 } from '../pages/Routes/Dates2'
import { Documents } from '../pages/Routes/Documents'
import { Links } from '../pages/Routes/Links'
import { Exam } from '../pages/Routes/Exam'
import { Fees } from '../pages/Routes/Fees'
import { Faq } from '../pages/Routes/Faq'
import { Undergraduatesprogram } from '../pages/Routes/Undergraduatesprogram'
import { Postgraduatesprogram } from '../pages/Routes/Postgraduatesprogram'
import { ProgramPost } from '../pages/Routes/ProgramPost'
import { Fluid } from '../pages/Routes/Fluid' 
import { Programs } from '../pages/Routes/Programs'
import { VerifyModal } from '../pages/components/Modals/VerifyModal'


const Router = () => {
  const user = useContext(Context)
  const location = useLocation()
  const token = Cookies.get('token')
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}></Route>
        (<Route path='/signin' element={<Signin />}></Route>)
        <Route path='/school' element={token ? <School /> : <Navigate to="/signin" />}></Route>
        (<Route path='/preschool' element={token ? <Dashboard /> : <Navigate to="/signin" />}></Route>)
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/verifymodal' element={<VerifyModal />}></Route>
        <Route path='/resetpassword' element={<ResetPassword />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/reset-password' element={<ConfirmPassword />}></Route>
        <Route path='/university' element={token ? <SchoolPage /> : <Navigate to="/signin" />}>
          <Route path=':universityid' element={token ? <SchoolPage /> : <Navigate to="/signin" />}>
          </Route>
        </Route>
        {/* <Route path='/university' element={token ? <Programs /> : <Navigate to="/signin" />}>
          <Route path=':universityid' element={token ? <Programs /> : <Navigate to="/signin" />}>
            <Route path=':schoolid' element={token ? <Programs /> : <Navigate to="/signin" />}></Route>
          </Route>
        </Route> */}
        <Route path='/university' element={token ? <ProgramPost /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/programs?' element={token ? <ProgramPost /> : <Navigate to="/signin" />}>
          </Route>
        </Route>
        <Route path='about' element={<About />}></Route>
        <Route path='/university' element={token ? <Undergraduate /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/undergraduate?' element={token ? <Undergraduate /> : <Navigate to="/signin"  />} />
        </Route>
        <Route path='/university' element={token ? <Undergraduatesprogram /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/undergraduateprogram?' element={token ? <Undergraduatesprogram /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Postgraduatesprogram /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/postgraduateprogram?' element={token ? <Postgraduatesprogram /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Faq /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/faq' element={token ? <Faq /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Dates2 /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/date' element={token ? <Dates2 /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Links /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/links' element={token ? <Links /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Fees /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/fees' element={token ? <Fees /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Programs /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/colleges' element={token ? <Programs /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Exam /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/exam' element={token ? <Exam/> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Fluid /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/fluids' element={token ? <Fluid /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Postgraduate /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/postgraduate?' element={token ? <Postgraduate /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Contact /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/contact?' element={token ? <Contact /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Documents /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/documents?' element={token ? <Documents /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/forgotpassword' element={<Forgotpassword />}></Route>
        <Route path="/verification" element={<Verification />} />
        <Route path='*' element={<Nopage />}></Route> 

      </Routes>
    </AnimatePresence>
  )
}
export default Router