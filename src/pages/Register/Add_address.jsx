import React, { useState } from 'react'
import { X, Search, Users, Clock, DollarSign, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

import './Add_address.css'

const Add_address = () => {
const navigate = useNavigate();
const handleaddress = () => {
    navigate("/manual")
  }

 
  return (
    <div className="add-address-container">
      <div className="add-address-header">
        <div>
        <p className="add-address-title">Add address</p>
        </div>
        <div>
        <p className="add-address-step">3 of 3</p>
        </div>
        <div>
       
          <X size={20} className="add-address-close" onClick={() => console.log('Close button clicked')}/>
     
        </div>
      </div>

      <div className="search-address">
        <div className="search-address-wrapper">
          
          <input
            type="text"
            placeholder='Search for address'
            className="search-address-input"
          />
          <label className='search-icon-text'></label>
          <Search size={15} className="search-icon"/>
        </div>
        <p className="search-address-text">Your address is not visible to other users</p>
      </div>

      <div className="address-options">
        <button className="options">
          <MapPin size={16} className="options-icon" />
          Use current location
        </button>
        <button className="options" onClick={handleaddress}>
          Add manually
        </button>
      </div>

      <div className="share-address">
        <h2>Sharing your address shows:</h2>
        <div className="share-item">
          <Users size={16} className="share-icon" />
          <span>People near you</span>
        </div>
        <div className="share-item">
          <Clock size={16} className="share-icon" />
          <span>Estimated delivery time</span>
        </div>
        <div className="share-item">
          <DollarSign size={16} className="share-icon" />
          <span>Estimate shipping costs</span>
        </div>
      </div>
    </div>
  )
}

export default Add_address
