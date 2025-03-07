import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    // FOR PASSWORD VISIBILITY 
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  // :::::::::::::::::::::: ENDS HERE ::::::::::::::::::::::: 

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
        email:user.email,
        password:user.password
    }

    console.log(sendData);

    axios
    .post('http://localhost/PHP_Carepro/signup.php',sendData)
    .then((result) => {
        if (result.data.Status == 'Invalid') {
          alert('Invalid User');
        }
        else {
          navigate('/dashboard');
        }
    })
    
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
          />
        </label>
        <label>
          Password
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
          />
        </label>
        <div className="eye" onClick={togglePasswordVisibility}>
          <i className={passwordVisible ? "ri-eye-fill" : "ri-eye-off-fill"}></i>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        <div className="links">
          Create a new account? <Link to="/Signup">Click here</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;





