import React, { useState } from 'react';
import { X, Info } from 'lucide-react';
import './personal_info.css';

const Personal_info = () => {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [countryCode, setCountryCode] = useState('+598'); 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSave = () => {
    console.log({
      fullName,
      gender,
      countryCode,
      phoneNumber,
      birthday,
    });
    alert('Information saved! (Check console for details)');
  };

  return (
    <div className="personal-info-container">
      {/* Header */}
      <div className="personal-info-header">
        <p className="personal-info-title">Personal information</p>
        
          <p className="personal-info-step">2 of 3</p>
          
          <button
            className="personal-info-close"
            aria-label="Close"
            onClick={() => console.log('Close button clicked')}
          >
            <X size={20} />
          </button>
     
      </div>

      {/* Form Fields */}
      <div className="personal-info-fields">
        {/* Full Name Input */}
        <div>
          
          <input
            type="text"
            id="fullName"
            className="personal-info-input"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Gender Radio Buttons */}
        <div class="Gender_radio">
          <p className="personal-info-label">Gender:</p>
          <div className="personal-info-gender">
            <label className="personal-info-radio-label">
              <input
                type="radio"
                name="gender"
                value="male"
                className='male_radio'
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              <span>Male</span>
            </label>
            <label className="personal-info-radio-label">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              <span>Female</span>
            </label>
          </div>
        </div>

        {/* Info Text */}
        <div className="personal-info-note">
          <Info size={18} className="personal-info-icon" />
          <span>The phone number and birthday are only visible to you</span>
        </div>

        {/* Phone Number Input */}
        <div className="personal-info-phone">
          {/* Country Code */}
          <div className="personal-info-country">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+598" className='personal_info_number'>+598</option>
              <option value="+1" className='personal_info_number'>+1 (USA)</option>
              <option value="+44" className='personal_info_number'>+44 (UK)</option>
              <option value="+91" className='personal_info_number'>+91 (India)</option>
            </select>
          </div>
          {/* Phone Number Field */}
          <input
            type="tel"
            id="phoneNumber"
            className="personal-info-input"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        {/* Birthday */}
        <div>
          
          <div className="personal-info-birthday">
            <input
              type="date"
              id="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              placeholder='Birthday'
            />
            <div className="personal-info-calendar">
              
            </div>
          </div>
          <p className="personal-info-subtext">Let us know about your birthday so as not to miss a gift</p>
        </div>
      </div>

      {/* Save Button */}
      <div className="personal-info-save">
        <button
          onClick={handleSave}
          className="personal-info-button"
        >
          Save information
        </button>
      </div>
    </div>
  );
};

export default Personal_info;
