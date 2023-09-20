import React, {useState} from 'react';
import "../Saved/Saved.css"
import Gmail from "../Saved/gmail.svg"
import Frame1 from "../Saved/frame1.png"
import Frame2 from "../Saved/frame2.png"

function Saved() {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  return (
    <div className='container-fluid'>

      <div className='row'>
        <div className='col-4'>
          <img src={Frame1} className='frame1'/>
        </div>
      </div>


    <div className='row'>
      <div className='col-4'>
      <div className='saved-container'>
      <div className='part1'>
      <h3>Login To Your Account</h3>
      <p>Login with google or enter login details to<br/> access your account</p>
      <button type='submit' className='g-btn mb-5'><img src={Gmail}/> Login with Google</button>
      </div>

      <div className='part2'>
        <div className='or mb-5'>
          <div className='or-b'></div>
          <div>Or</div>
          <div className='or-b'></div>
        </div>
        
       <div className='email-password'>
        <label>Email address</label>
        <input type="email" placeholder='Enter email'/>

        <label>Password</label>
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Enter password"
          className="password"/>
        <i onClick={togglePasswordVisibility}
          className={passwordVisible ? 'ri-eye-fill eyeicon' : 'ri-eye-off-fill eyeicon'}>
        </i>
      
        <p>Forgot Password? <a href='#'>Reset your password</a></p>
       </div>
      </div>

      <div className='part3'>
        <button>Login</button>
        <a href='#'>it's an emergency, connect me quickly</a>
      </div>
    
    </div>
      </div>
    </div>
    

    <div className='row'>
        <div className='col-4'>
        <img src={Frame2} className='frame2'/>
        </div>
    </div>

    </div>
  )
}

export default Saved;

