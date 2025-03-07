import React, { useState } from "react";
import "./Signup.css";
// LINKS 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  // FOR PASSWORD VISIBILITY 
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  // ................ visible password ends here .......................

  let history = useNavigate(); // USE FOR NAVIGATE ON PREVIOUS

  const [data, setData]=useState({
        name:"",
        email:"",
        password:""

  })

  const handleChange = (e) => {
       setData({ ...data, [e.target.name]: e.target.value });
      //  console.log(data);     
  }

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
        name:data.name,
        email:data.email,
        password:data.password
    }

    console.log(sendData);

    axios.post('http://localhost/PHP_Carepro/signup.php',sendData)
    .then((result) => {
        if (result.data.Status == 'Invalid') {
          alert('Invalid User');
        }
        else {
          history('/login');
        }
    })
    
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="signup">
          <h1>Create Account</h1>
          <form method="" action="" onSubmit={submitForm}>
            <span className="signup-span">Please sign up to book appointment</span>
            <label>
              Full Name
              <input type="text" name="name" id="name" autocomplete="off" placeholder="Name"
               onChange={handleChange} value={data.name} />
            </label>

            <label>
              Email
              <input type="email" name="email" id="email" autocomplete="off" placeholder="Email"
               onChange={handleChange} value={data.email} />
            </label>

            <label>
              Password
              <input type={passwordVisible ? "text" : "password"} name="password" id="password" autocomplete="off" placeholder="Password"
               onChange={handleChange} value={data.password}/>
            </label>

            {/* PASSWORD EYE  */}
            <i onClick={togglePasswordVisibility}
              className={
                passwordVisible
                  ? "ri-eye-fill eyeicon"
                  : "ri-eye-off-fill eyeicon"
              }
            ></i>

            <button className="signup-btn" type="submit">Create Account</button>

            <div class="links">
              Already have an account? <Link to="/Login">Login here</Link> 
            </div>
          </form>
        </div>

        <footer>
            <div>
              <div className='brand'>
                <div className="circle blue"></div>
                <div className="circle pink"></div>
                <div className="logo"><Link to={"/"}>CarePro</Link></div>
              </div>
              <div className='brand-text'>Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown 
                  printer took a galleyof type and scrambled it to make a 
                  type specimen book.
              </div>
            </div>

            <div className='company-text'>
              <h1>COMPANY</h1>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
              </ul>
            </div>

            <div className='get-in-touch-text'>
              <h1>GET IN TOUCH</h1>
                <ul>
                  <li>+1-212-456-7890</li>
                  <li>greatstackdev@gmail.com</li>
                </ul>
            </div>
          </footer>

          {/* :::::::::::::::::::::::::::::FOOTER ENDS HERE::::::::::::::::::::::::::::::::::  */}

          <div className='copyright'>
            <span className='copyright-span'>Copyright 2024 @ Greatstack.dev - All Right Reserved.</span>
          </div>
      </div>
    </div>
  );
}

export default Signup;

