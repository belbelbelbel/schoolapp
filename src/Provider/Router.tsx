import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Signin from '../pages/Auth/Signin'
import Home from '../pages/Home'
import Nopage from '../pages/components/Nopage'
import { AnimatePresence } from "framer-motion"
import { School } from '../pages/School'
import Forgotpassword from '../pages/Auth/Forgotpassword'
import Signup from '../pages/Auth/Signup'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Programs } from '../pages/Programs'
import { useContext } from 'react'
import { Context } from './Usecontext'
import { About } from '../pages/About'
import { Verification } from '../pages/Auth/Verification'
import Cookies from 'js-cookie'
import { ContactUs } from '../pages/ContactUs'
import { ResetPassword } from '../pages/Auth/ResetPassword'
import { ConfirmPassword } from '../pages/Auth/ConfirmPassword'
import { SchoolPage } from '../pages/Dashboard/SchoolPage'
import { Programs2 } from '../pages/Programs2'
import { Undergraduate } from '../pages/Undergraduate'
import { Postgraduate } from '../pages/Postgraduate'
import { Contact } from '../pages/Contact'
import { Dates2 } from '../pages/Dates2'
import { Documents } from '../pages/Documents'
import { Links } from '../pages/Links'
import { Exam } from '../pages/Exam'
import { Fees } from '../pages/Fees'
import { Faq } from '../pages/Faq'
import { Undergraduatesprog } from '../pages/Undergraduatesprog'
import { Postgraduatesprog } from '../pages/Postgraduatesprog'
import { ProgramPost } from '../pages/ProgramPost'
import { Fluid } from '../pages/Fluid' 
import { VerifyModal } from '../pages/components/VerifyModal'


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
        <Route path='/university' element={token ? <Undergraduate /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/undergraduate?' element={token ? <Undergraduate /> : <Navigate to="/signin"  />} />
        </Route>
        <Route path='/university' element={token ? <Undergraduatesprog /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/undergraduateprogram?' element={token ? <Undergraduatesprog /> : <Navigate to="/signin" />} />
        </Route>
        <Route path='/university' element={token ? <Postgraduatesprog /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/postgraduateprogram?' element={token ? <Postgraduatesprog /> : <Navigate to="/signin" />} />
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
        <Route path='/university' element={token ? <Programs2 /> : <Navigate to="/signin" />}>
          <Route path=':universityid?/colleges' element={token ? <Programs2 /> : <Navigate to="/signin" />} />
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