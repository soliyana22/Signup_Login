import React from 'react'
import {X} from 'lucide-react';
import './manual.css'
import { useNavigate } from 'react-router-dom';
const Manual = () => {
  const navigate = useNavigate();
  const handlesave = () => {
    navigate("/final")
  }


  return (
    <div>
        <div className="add-address-container">
      <div className="add-address-header">
        <p className="add-address-title">Add address</p>
        <p className="add-address-step">3 of 3</p>
        
          <X size={20} className="add-address-close"
          aria-label="Close"
          onClick={() => console.log('Close button clicked')}/>
      
      </div>
       <div className="search-address">
        <div className="search-address-wrapper">
          
          <div className="input-group">
              <input
                type="text"
                placeholder="319 Bainbridge Street"
                className="search-address-input"
          />
          <label className="floating-label">Street address</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder=""
              className="search-address-input"
            />
            <label className="floating-label first">Apartment</label>
            <label className="floating-label second">Optional</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="New York City"
              className="search-address-input"
            />
      <label className="floating-label">City</label>
          </div>

          <div className='specific'>
            <div className="input-group">
              <input
                type="text"
                placeholder="New York "
                className="search-address-input"
              />
          <label className="floating-label">State</label>
        </div>

          <div className="input-group">
              <input
                type="text"
                placeholder="11233"
                className="search-address-input specific"
              />
         <label className="floating-label">Zip code</label>
        </div>

         
        </div>
        </div>
       
      </div>
      <div>
        <button className='save_btn' onClick={handlesave}>
          Save information
        </button>
      </div>
    </div>
</div>
   
  )
}
export default Manual;
