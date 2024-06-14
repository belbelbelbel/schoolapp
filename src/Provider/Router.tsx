import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes, useLocation } from 'react-router-dom'
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
import { Programs } from '../Routes/Programs'
import { ProtectedRoute } from '../Routes/ProtectedRoute'
import { Faq } from '../Routes/Faq'
import { useContext } from 'react'
import { Context } from './Usecontext'
import { Userprofile } from '../Routes/Userprofile'
import { Date } from '../Routes/Date'
import { Fees } from '../Routes/Fees'
import { Exams } from '../Routes/Exams'
import { Fluid } from '../Routes/Fluid'
import { Admission } from '../Routes/Admission'
import { About } from '../Routes/About'
import { Verification } from '../Routes/Verification'
import Cookies from 'js-cookie'
import { VerifyModal } from '../Routes/VerifyModal'
import { ContactUs } from '../Routes/ContactUs'
import { ResetPassword } from '../Routes/ResetPassword'


const Router = () => {
  const user = useContext(Context)
  const location = useLocation()
  const token = Cookies.get('token')
  console.log(token)
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/userprofile' element={<Userprofile />}></Route>
        (<Route path='/signin' element={<Signin />}></Route>)
        <Route path='/school' element={token ? <School /> : <Navigate to="/signin" />}></Route>
        (<Route path='/preschool' element={token ? <PreSchool /> : <Navigate to="/signin" />}></Route>)
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/verifymodal' element={<VerifyModal/>}></Route>
        <Route path='/resetpassword' element={<ResetPassword/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/university' element={<Covenant />}>
          <Route path=':universityid' element={<Covenant />}>
          </Route>
        </Route>
        <Route path='/university' element={<Programs />}>
          <Route path=':universityid' element={<Programs />}>
            <Route path=':schoolid' element={<Programs />}></Route>
          </Route>
        </Route>
        <Route path='about' element={<About />}></Route>
        <Route path='/university' element={<Undergraduate />}>
          <Route path=':universityid?/undergraduate?' element={<Undergraduate />} />
        </Route>
        <Route path='/university' element={<Faq />}>
          <Route path=':universityid?/underfaq' element={< Faq />} />
        </Route>
        <Route path='/university' element={<Date />}>
          <Route path=':universityid?/date' element={< Date />} />
        </Route>
        <Route path='/university' element={<Fees />}>
          <Route path=':universityid?/links' element={< Fees />} />
        </Route>
        <Route path='/university' element={<Admission />}>
          <Route path=':universityid?/admission' element={< Admission />} />
        </Route>
        <Route path='/university' element={<Exams />}>
          <Route path=':universityid?/exam' element={< Exams />} />
        </Route>
        <Route path='/university' element={<Fluid />}>
          <Route path=':universityid?/fluid' element={< Fluid />} />
        </Route>
        <Route path='/university' element={<Postgraduate />}>
          <Route path=':universityid?/postgraduate?' element={<Postgraduate />} />
        </Route>
        <Route path='/university' element={<Contact />}>
          <Route path=':universityid?/contact?' element={<Contact />} />
        </Route>
        <Route path='/university' element={<Documents />}>
          <Route path=':universityid?/documents?' element={<Documents />} />
        </Route>
        <Route path='/school/covenant-university/contact' element={<Contact />}></Route>
        <Route path='/school/covenant-university/usefulinks' element={<Uselinks />}></Route>
        <Route path='/forgotpassword' element={<Forgotpassword />}></Route>
        <Route path="/verification" element={<Verification />} />
        <Route path='*' element={<Nopage />}></Route>
      </Routes>
    </AnimatePresence>
  )
}
export default Router