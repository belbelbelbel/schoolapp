import React from 'react'
import "../Styles/Uselinks.css"
export const Uselinks = () => {
    return (
        <div className='Uselink'>
           <div>
           <div className="Contact_container">
                <div className='Contact_containera'>  <img src="/Menu button.svg" alt="menu" width="22vw" /></div>
                <div className="Contact_containerb">
                    <div> <img src="/edit button.svg" alt="edit" /></div>
                    <div> <img src="/Vector (4).svg" alt="flag" /></div>
                </div>
            </div>
            <div className='Contact_headers'> Useful Links</div>
            <div className='image11'></div>
           </div>
            <div className='Undercover_container9'>
                <div className='Undercover_container10'>
                    <div>Logo</div>
                    <div>Back to top</div>
                </div>
                <div className='Undercover_container11'>
                    <div>
                        <div className='eze'>Terms of Use</div>
                        <div>Information presented here is<br />purely for reference purposes <br />and may have changed after <br />the page was updated. Users are<br />admonished to do further research<br />to get the most up to date information.<br />Click on the 󠅁π symbol to flag information<br />as incorrect or incomplete. Click on ↓ to<br />make modification to unlocked content.</div>
                    </div>
                    <div>
                        <div>Page creator: Uncle Simple<br />Page created: MAY9/2022<br />Last updated: MAY11/2022 by…</div>
                    </div>
                </div>
            </div>
            {/* <form onSubmit={handleSubmit}>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap" >
          <label htmlFor="surname"> Surname</label>
          <input name="surname" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your surname is required") && <div className="error">Your Surname Is Required.</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="firstname"> First Name</label>
          <input name="firstname" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your firstname is required") && <div className="error">Your Firstname Is Required.</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="birthday"> Birthday</label>
          <input name="birthday" type="date" onChange={handleOnchange} />
          {user?.error.includes("Your Date Of birth Is Required") && <div className="error"> Your Date Of Birth Is Required</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="phonenumber"> Phone Number</label>
          <input name="phonenumber" type="tel" onChange={handleOnchange} />
          {message}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="email"> Email Address</label>
          <input name="email" type="email" onChange={handleOnchange} />
          {errormessage}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="school"> Present School</label>
          <input name="school" type="text"  onChange={handleOnchange} />
          {user?.error.includes("Your school detail is required") && <div className="error">Your School Details Are Required</div>}
        </motion.div>
        <motion.div className="surnames"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="school">Password</label>
          <div className="surnamess"> <input type={show ? "text": "password"} name="password" onChange={handleOnchange} />
            {show ? (<PiEyeLight onClick={handleclick} style={{ fontSize: "6vw" }} />) : (<PiEyeSlash onClick={handleclick} style={{ fontSize: "6vw" }} />)}
          </div>
          {passwordmessage}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="class"> Class/Level</label>
          <input name="class" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your class is required") && <div className="error">Your Class/Level Is Required</div>}
        </motion.div>
        <motion.div className="surname"
          variants={inputVariants}
          whileTap="tap">
          <label htmlFor="reason"> Reason For Joining</label>
          <input name="reason" type="text" onChange={handleOnchange} />
          {user?.error.includes("Your reasons are required") && <div className="error">Your Valid Phonenumber Is Required</div>}
        </motion.div>
        <motion.div className="btn">
          <motion.button type="submit"
            className="signup_btn"
            variants={locations.state?.showstyle}
            initial="initial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate="animate"
          >Sign Up</motion.button>
        </motion.div>
        <div className='btn-div21'>Don't have an account?<span><Link to='/signin'>Sign In</Link></span> </div>
      </form> */}
        </div>
    )
}