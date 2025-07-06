import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple,faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { FcGoogle } from 'react-icons/fc'

import {  faEye, faEyeSlash, faCheck } from '@fortawesome/free-solid-svg-icons';

import { NavLink, useNavigate } from 'react-router-dom';
import './Personal_info'

import './Register.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../util/firebase"





const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = email.includes("@") && email.includes(".");
  const isPasswordValid = password.length >= 8;

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/personalinfo"); // success
  } catch (err) {
    console.error(err);
    alert("Signup failed: " + err.message);
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

      <p className='text_under_icon'>or register with email</p>
      <div className='form_container'>
        <form onSubmit={handleSubmit}>
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
            <p>8+ Characters</p>
          </div>

          <button type="submit">Create Account</button><br/>
          <label className="custom-checkbox-container">
            <input type="checkbox" className="hidden-checkbox"/>
            <span className="custom-checkbox"></span>
            Send me news and promotions
          </label>
        </form>
        <div>
          <p>By continuing I agree with the <a>Terms & Conditions,<br/>Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;