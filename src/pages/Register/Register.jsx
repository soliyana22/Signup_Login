import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple,faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { FcGoogle } from 'react-icons/fc'
import './Register.css'


const Register = () => {
  return (
   <div>
      <div className='register_container'>
        <div className='register_title'>
          <p>Register</p>
          <p id="login">Login</p>
        </div>
        <div className='register_icons'>
  <div className='reg_icons'><FontAwesomeIcon icon={faApple} className="icon" /></div>
  <div className='reg_icons'><FontAwesomeIcon icon={faFacebookF} className="icon" style={{ color: "#1877F2" }} /></div>
  <div className='reg_icons'><FcGoogle className="icon" /></div>
</div>

        <p className='text_under_icon'>or register with email</p>
        <div className='form_container'>
            <form>
              <div className='input-group'>
                <input type="email" name="email"  placeholder='example@gmail.com'/><br/>
                <label>Email address</label>
              </div>
              <div className='input-group'>
                <input type="password" name="password" value="password" placeholder='*********'/><br/>
                <label> Password</label>
              </div>
                <button type="submit">Create Account</button><br/>
               <label class="custom-checkbox-container">
                <input type="checkbox" class="hidden-checkbox"/>
                <span class="custom-checkbox"></span>
                Send me news and promotions
              </label>
     


            </form>
            <div>
              <p>By continuing I agree with the <a>Terms & Conditions,<br/>Privacy Policy</a></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
