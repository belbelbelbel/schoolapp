import React, { useContext, useState } from 'react';
import "../Styles/Signin.css";
import { Context } from '../Provider/Usecontext';
import {useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
const Signin = () => {
  const location = useNavigate()
  const user = useContext(Context);
  const [show,setshow] = useState(false)
  function handleclick() {
    setshow(!show)
  }
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    user?.setformdata({
      ...user.formdata,
      [name]: value
    });
  };
  const { formdata } = user || {};
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    let validateerror: string[] = [];
    e.preventDefault();
   if (!formdata?.email.trim()) {
      validateerror.push("The email is required")
    }
    else if (!/\S+@\S+\.\S+/.test(formdata?.email)) {
      validateerror.push("The email is not correct")
    }
    if(!formdata?.password.trim()) {
      validateerror.push("the password is required")
    }
    else if(formdata.password.length < 6) {
      validateerror.push("the pasword is incomplete")
    }
    if(validateerror.length === 0) {
      location("/review")
    }
 user?.seterror(validateerror)
  };
  let emailerror: React.ReactNode = ""
  if(user?.error.includes("The email is required")) {
    emailerror = <div className='error'>The Email Is Required</div>
  }
  else if(user?.error.includes("The email is not correct")) {
    emailerror = <div className='error'>The Email Is  Not Correct</div>
  }
  let pasworderror : React.ReactNode = ""
  if (user?.error.includes("the password is required")) {
    pasworderror = <div className='error'>The Password Is Required</div>
  }
  if  (user?.error.includes("the pasword is incomplete")) {
    pasworderror = <div className='error'>The Pasword Is Incomplete</div>
  }
  const img1 = "icons8-show-password-50.png"
  const img2 = "icons8-hide-password-50.png"
  return (
    <motion.div className='signin' 
    initial= {{opacity:0}}
        animate = {{opacity: 1}}
        exit={{opacity: 0}}>
      <form onSubmit={handleSubmit}>
        <div className='surname-email'>
          <input placeholder='Email' onChange={handleOnchange} name='email' type='email' />
          {emailerror}
        </div>
       <div>
       <div className='surname-password'>
          <input placeholder='Password' name='password' type={show? "text":"password"}  onChange={handleOnchange} />
          <img src={show ? img1 : img2} alt="imgs"  width="35rem" onClick={()=>handleclick()}/>
        </div>
        {pasworderror}
       </div>
        <div className='btn'>
          <button type='submit' className='signin_btn'>Sign in</button>
          <div className='btn-div'>Forgot password</div>
        </div>
      </form>
    </motion.div>
  );
};

export default Signin;
