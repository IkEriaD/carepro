import React, {useState} from 'react';
import "../Signup/Signup.css"
import Gmail from "../Saved/gmail.svg"
import Stop from "../Signup/stop.png"
import Frame1 from "../Signup/frame1.png"
import Frame2 from "../Signup/frame2.png"

function Signup() {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // ................ visible password ends here .......................
  


  return (
    <div className='container-fluid'>

      <div className='row'>
        <div className='col-4'>
          <img src={Frame1} className='frame11'/>
        </div>
      </div>

      <div className='row'>
        <div className='col-4'>
        <div className='signup-container'>
      <div className='part11'>
      <h3>Login To Your Account</h3>
      <p>Login with google or enter login details to<br/> access your account</p>
      <button type='submit' className='gg-btn mb-5'><img src={Gmail}/> Login with Google</button>
      </div>

      <div className='part22'>
        <div className='orr mb-5'>
          <div className='orr-b'></div>
          <div>Or</div>
          <div className='orr-b'></div>
        </div>
        
       <div className='name-password'>
        <label>Full Name</label>
        <input type="text" placeholder='Enter Name'/>

        <label>Email address</label>
        <input type="email" placeholder='Enter email'/>

        <label>Phone Number</label>
        <input type="text" placeholder='Enter phone number'/>

        <label>Password</label>
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Enter password"
          className="password"/>
        <i onClick={togglePasswordVisibility}
          className={passwordVisible ? 'ri-eye-fill eyeicon' : 'ri-eye-off-fill eyeicon'}>
        </i>
        <span> <img src={Stop}/> Password should be atleast 8 characters long</span>

       </div>
      </div>

      <div className='part33'>
        <button>Create Account</button>
        <a href='#'>it's an emergency, connect me quickly</a>
      </div>
    
    </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-4'>
          <img src={Frame2} className='frame22'/>
        </div>
      </div>
    
    </div>
  )
}

export default Signup;

