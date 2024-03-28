import React, { useContext } from 'react';
import "../Styles/Signin.css";
import { Context } from '../Provider/Usecontext';

const Signin = () => {
  const user = useContext(Context);

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
 user?.seterror(validateerror)
  };
  let emailerror: React.ReactNode = ""
  if(user?.error.includes("The email is required")) {
    emailerror = <div className='error'>The email is required</div>
  }
  else if(user?.error.includes("The email is not correct")) {
    emailerror = <div className='error'>The email is  not correct</div>
  }
  let pasworderror : React.ReactNode = ""
  if (user?.error.includes("the password is required")) {
    pasworderror = <div className='error'>The password is required</div>
  }
  if  (user?.error.includes("the pasword is incomplete")) {
    pasworderror = <div className='error'>The pasword is incomplete</div>
  }
  return (
    <div className='signin'>
      <form onSubmit={handleSubmit}>
        <div className='surname'>
          <input placeholder='Email' onChange={handleOnchange} name='email' type='email' />
          {emailerror}
        </div>
        <div className='surname'>
          <input placeholder='Password' name='password' type='password' onChange={handleOnchange} />
          {pasworderror}
        </div>
        <div className='btn'>
          <button type='submit' className='signin_btn'>Sign in</button>
          <div>Forgot password</div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
