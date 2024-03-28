import { Link, useNavigate } from "react-router-dom";
import "../Styles/Signup.css";
import React, { useContext, useState } from "react";
import { Context } from "../Provider/Usecontext";
const Signup = () => {
  const user = useContext(Context);
  const location = useNavigate();
  const [firstName, setFirstName] = useState("");
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (user) {
      user.setformdata((prevFormData) => ({
        ...prevFormData,
        [name]: value.toString(),
      }));
      user.seterror([]);
      setFirstName(value)
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let validateerror: string[] = [];
    const { formdata } = user || {};
    if (!formdata?.surname.trim()) {
      validateerror.push("Your surname is required");
    }
    if (!formdata?.birthday.trim()) {
      validateerror.push("Your Date Of birth Is Required");
    }
    if (!formdata?.firstname.trim()) {
      validateerror.push("Your firstname is required");
    }
    if (!formdata?.phonenumber.trim()) {
      validateerror.push("Your valid phonenumber is required");
    } else if (formdata.phonenumber.length < 11) {
      validateerror.push("Please type in the complete phonenumber");
    }
    if (!formdata?.email.trim()) {
      validateerror.push("Your email is required");
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      validateerror.push("wrong email format");
    }
    if (!formdata?.school.trim()) {
      validateerror.push("Your school detail is required");
    }
    if (!formdata?.class.trim()) {
      validateerror.push("Your class is required");
    }
    if (!formdata?.reason?.trim()) {
      validateerror.push("Your reasons are required");
    }
    if (validateerror.length === 0) {
      alert("Signup Successful");
      location("/review");
    } else {
      console.error("Validation errors:", validateerror);
    }
    user?.seterror(validateerror);
  };

  let message: React.ReactNode = "";
  if (user?.error.includes("Your valid phonenumber is required")) {
    message = <div className="error">Your valid phonenumber is required</div>;
  } else if (user?.error.includes("Please type in the complete phonenumber")) {
    message = <div className="error">Incomplete phone number</div>;
  }
  let errormessage: React.ReactNode;
  if (user?.error.includes("wrong email format")) {
    errormessage = <div className="error">Wrong Email Address</div>;
  } else if (user?.error.includes("Your email is required")) {
    errormessage = <div className="error">Your email is required</div>;
  }
  return (
    <div className="signup">
      <h2>Let's Get Started!</h2>
      <form onSubmit={handleSubmit}>
        <div className="surname">
          <label htmlFor="surname"> Surname</label>
          <input name="surname" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your surname is required") && <div className="error">Your surname is required.</div>}
        </div>
        <div className="surname">
          <label htmlFor="firstname"> First Name</label>
          <input name="firstname" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your firstname is required") && <div className="error">Your firstname is required.</div>}
        </div>
        <div className="surname">
          <label htmlFor="birthday"> Birthday</label>
          <input name="birthday" type="date" onChange={handleOnchange} />
          {user?.error.includes("Your Date Of birth Is Required") && <div className="error"> Your Date Of birth Is Required</div>}
        </div>
        <div className="surname">
          <label htmlFor="phonenumber"> Phone Number</label>
          <input name="phonenumber" type="tel" onChange={handleOnchange} />
          {message}
        </div>
        <div className="surname">
          <label htmlFor="email"> Email Address</label>
          <input name="email" type="email" onChange={handleOnchange} />
          {errormessage}
        </div>
        <div className="surname">
          <label htmlFor="school"> Present School</label>
          <input name="school" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your school detail is required") && <div className="error">Your school details are required</div>}
        </div>
        <div className="surname">
          <label htmlFor="class"> Class/Level</label>
          <input name="class" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your class is required") && <div className="error">Your class/level is required</div>}
        </div>
        <div className="surname">
          <label htmlFor="reason"> Reason For Joining</label>
          <input name="reason" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your reasons are required") && <div className="error">Your valid phonenumber is required</div>}
        </div>
        <div className="btn">
          <button type="submit" className="signup_btn">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
