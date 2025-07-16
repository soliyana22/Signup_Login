import React from 'react';
import './final.css';
import { useNavigate } from 'react-router-dom';
import{X} from 'lucide-react';
const Final = () => {
  const navigate = useNavigate();
  const handlesave = () => {
    navigate("/login")
  }
  return (
    <div className="final_container">
     
        <X size={20} className="final_close" onClick={()=>(console.log('close button is clicked'))}/>
    
      <div className="final_image_container">
        <img
          src="../../assets/images/final_image.png"
          alt="Registration Success"
          className="final_image"
        />
      </div>
      <div className="final_content">
        <p className="final_message">You are successfully<br/> registered!</p>
        <button className="login_btn" onClick={handlesave}>Go to Login</button>
      </div>
    </div>
  );
};

export default Final;
