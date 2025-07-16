import React, { useState } from 'react'
import {X} from 'lucide-react';
import './manual.css'
import { useNavigate } from 'react-router-dom';
const Manual = () => {
const navigate = useNavigate();
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [region, setRegion] = useState(''); // renamed from state
const [zip, setZip] = useState('');
const [apartment, setApartment] = useState('');

  const handlesave = () => {
    if (!address.trim()) {
      alert("Please enter Street Address.");
      return;
    }
    if (!city.trim()) {
      alert("Please enter your city.");
      return;
    }
    if (!region.trim()) {
      alert("Please enter your state.");
      return;
    }
    if (!zip.trim()) {
      alert("Please enter a zip code.");
      return;
    }
    navigate("/final");
  };


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
                 onChange={(e) => setAddress(e.target.value)}
          />
          <label className="floating-label">Street address</label>
          </div>

          <div className="input-group">
      <input
        type="text"
        value={apartment}
        placeholder=""
        className="search-address-input"
        onChange={(e) => setApartment(e.target.value)}
      />
      
      {/* Left label - always visible */}
      <label className="floating-label left-label">Apartment</label>
      
      {/* Right label - only visible when user types */}
      {apartment.trim() !== "" && (
        <label className="floating-label right-label">Optional</label>
      )}
    </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="New York City"
              className="search-address-input"
              onChange={(e) => setCity(e.target.value)}
            />
      <label className="floating-label">City</label>
          </div>

          <div className='specific'>
            <div className="input-group">
              <input
                type="text"
                placeholder="New York "
                className="search-address-input"
                 onChange={(e) => setRegion(e.target.value)}
              />
          <label className="floating-label">State</label>
        </div>

          <div className="input-group">
              <input
                type="text"
                placeholder="11233"
                className="search-address-input specific"
                onChange={(e) => setZip(e.target.value)}
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
