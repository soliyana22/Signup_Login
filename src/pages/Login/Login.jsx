import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple,faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { FcGoogle } from 'react-icons/fc'

import {  faEye, faEyeSlash, faCheck } from '@fortawesome/free-solid-svg-icons';

import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../util/firebase"

import'./Login.css'
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = email.includes("@") && email.includes(".");
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password);

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/dashboard");
  } catch (err) {
    alert("Login failed: " + err.message);
  }
}

  return (
    <div className='register_container'>
      <div className='register_title'>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
        >
          Register
        </NavLink>
        <NavLink 
          to="/login" 
          id="login"
          className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
        >
          Login
        </NavLink>
      </div>

      <div className='register_icons'>
        <div className='reg_icons'><FontAwesomeIcon icon={faApple} className="icon" /></div>
        <div className='reg_icons'><FontAwesomeIcon icon={faFacebookF} className="icon" style={{ color: "#1877F2" }} /></div>
        <div className='reg_icons'><FcGoogle className="icon" /></div>
      </div>

      <p className='text_under_icon'>or Login with email</p>
      <div className='form_container'>
        <form onSubmit={handleLogin}>
          <div className='input-group'>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email address</label>
            {isEmailValid && (
              <FontAwesomeIcon icon={faCheck} className="check-icon" />
            )}
          </div>

          <div className='input-group password-group'>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="*********"
              value={password}
              className='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
            <span
              className="eye-icon"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className='faEyeSlash faEye' />
            </span>
            {isPasswordValid && (
              <FontAwesomeIcon icon={faCheck} className="check-icon" />
            )}
            
          </div>

          <button type="submit">Log In</button><br/>
          <label className="custom-checkbox-container">
            <input type="checkbox" className="hidden-checkbox"/>
            <span className="custom-checkbox"></span>
            Remeber me
          </label>
        </form>
      </div>
    </div>
  );
}
export default Login;