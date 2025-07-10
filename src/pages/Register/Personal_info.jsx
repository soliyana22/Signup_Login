import React, { useState } from 'react';
import { X, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Personal_info.css';

const Personal_info = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [countryCode, setCountryCode] = useState('+598');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');

  const isPhoneNumberValid = phoneNumber.length >= 7 && /^\d{7}$/.test(phoneNumber);

  // adjust your name validation as needed
  const isFullName = /[a-z]/.test(fullName) && /[A-Z]/.test(fullName);

  const handleSave = () => {
    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }
    if (!gender) {
      alert("Please select your gender.");
      return;
    }
    if (!phoneNumber.trim()) {
      alert("Please enter your phone number.");
      return;
    }
    if (!isPhoneNumberValid) {
      alert("Please enter a valid phone number.");
      return;  // prevent navigation
    }
    if (!isFullName) {
      alert("Full name must contain at least one uppercase and one lowercase letter.");
      return;
    }

    // If all good, navigate:
    console.log({
      fullName,
      gender,
      countryCode,
      phoneNumber,
      birthday,
    });

    navigate("/addaddress", {
      state: {
        fullName,
        gender,
        countryCode,
        phoneNumber,
        birthday,
      },
    });
  };

  return (
    <div className="personal-info-container">
      <div className="personal-info-header">
        <p className="personal-info-title">Personal information</p>
        <p className="personal-info-step">2 of 3</p>
        <X
          size={20}
          className="personal-info-close"
          aria-label="Close"
          onClick={() => console.log('Close button clicked')}
        />
      </div>

      <div className="personal-info-fields">
        <div>
          <input
            type="text"
            placeholder="Full name"
            className="personal-info-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="Gender_radio">
          <p className="personal-info-label">Gender:</p>
          <div className="personal-info-gender">
            <label className="personal-info-radio-label">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="personal-info-radio-span">Male</span>
            </label>
            <label className="personal-info-radio-label">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="personal-info-radio-span">Female</span>
            </label>
          </div>
        </div>

        <div className="personal-info-note">
          <Info size={18} className="personal-info-icon" />
          <span>The phone number and birthday are only visible to you</span>
        </div>

        <div className="personal-info-phone">
          <div className="personal-info-country">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+598">+598</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (India)</option>
            </select>
          </div>
          <input
            type="tel"
            placeholder="Phone number"
            className="personal-info-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="personal-info-birthday">
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <p className="personal-info-subtext">
            Let us know about your birthday so as not to miss a gift
          </p>
        </div>
      </div>

      <div className="personal-info-save">
        <button className="personal-info-button" onClick={handleSave}>
          <span className='save_btn'>Save information</span>
        </button>
      </div>
    </div>
  );
};

export default Personal_info;
