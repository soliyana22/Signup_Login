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
        <button
          className="add-address-close"
          aria-label="Close"
          onClick={() => console.log('Close button clicked')}
        >
          <X size={20} />
        </button>
      </div>
       <div className="search-address">
        <div className="search-address-wrapper">
          
          <input
            type="text"
            placeholder="Street adress"
            className="search-address-input"
          />
          <input
            type="text"
            placeholder="Apartment"
            className="search-address-input"
          />
          <input
            type="text"
            placeholder="City"
            className="search-address-input"
          />
        <div className='specific'>
          <input
            type="text"
            placeholder="State"
            className="search-address-input "

          />
          <input
            type="text"
            placeholder="Zip Code"
            className="search-address-input specific"
          />
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
