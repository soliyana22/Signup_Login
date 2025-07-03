import React from 'react'

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
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 sm:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Personal information</h2>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600 text-lg">2 of 3</span>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
            onClick={() => console.log('Close button clicked')}
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Full Name Input */}
        <div>
          <label htmlFor="fullName" className="sr-only">Full name</label>
          <input
            type="text"
            id="fullName"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Gender Radio Buttons */}
        <div>
          <p className="text-gray-700 mb-2">Gender:</p>
          <div className="flex items-center space-x-6">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                className="form-radio h-5 w-5 text-purple-600 border-gray-300 focus:ring-purple-500"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="ml-2 text-gray-700">Male</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                className="form-radio h-5 w-5 text-purple-600 border-gray-300 focus:ring-purple-500"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="ml-2 text-gray-700">Female</span>
            </label>
          </div>
        </div>

        {/* Info Text */}
        <div className="flex items-center text-sm text-gray-500 bg-purple-50 rounded-lg p-3">
          <Info size={18} className="text-purple-600 mr-2 flex-shrink-0" />
          <span>The phone number and birthday are only visible to you</span>
        </div>

        {/* Phone Number Input */}
        <div className="flex space-x-2">
          {/* Country Code Dropdown */}
          <div className="relative">
            <select
              className="appearance-none w-24 p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8 transition-all"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+598">+598</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (India)</option>
              {/* Add more country codes as needed */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
            </div>
          </div>
          {/* Phone Number Field */}
          <input
            type="tel"
            id="phoneNumber"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        {/* Birthday Input */}
        <div>
          <label htmlFor="birthday" className="sr-only">Birthday</label>
          <div className="relative">
            <input
              type="date"
              id="birthday"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-10 appearance-none transition-all"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <CalendarDays size={20} className="text-gray-400" />
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-1">Let us know about your birthday so as not to miss a gift</p>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8">
        <button
          onClick={handleSave}
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors text-lg font-semibold shadow-md"
        >
          Save information
        </button>
      </div>
    </div>
  );
}

export default Personal_info
