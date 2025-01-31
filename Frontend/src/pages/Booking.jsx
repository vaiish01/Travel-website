import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    destination: '',
    travelDate: '',
    travelers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed! Details: \n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <form 
        onSubmit={handleSubmit}
        style={{
          width: '50%',
          maxWidth: '600px',
          padding: '40px',
          background: 'white',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h2 style={{ 
          textAlign: 'center', 
          color: '#28a745', 
          fontSize: '28px' 
        }}>Book Your Trip</h2>

        <label style={{ display: 'block', marginTop: '15px', fontSize: '18px' }}>
          Full Name:
        </label>
        <input 
          type="text" 
          name="fullName"
          placeholder="Enter your name" 
          value={formData.fullName}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '10px', 
            fontSize: '16px', 
            marginTop: '5px', 
            border: '1px solid #ccc', 
            borderRadius: '5px' 
          }} 
          required
        />

        <label style={{ display: 'block', marginTop: '15px', fontSize: '18px' }}>
          Email Address:
        </label>
        <input 
          type="email" 
          name="email"
          placeholder="Enter your email" 
          value={formData.email}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '10px', 
            fontSize: '16px', 
            marginTop: '5px', 
            border: '1px solid #ccc', 
            borderRadius: '5px' 
          }} 
          required
        />

        <label style={{ display: 'block', marginTop: '15px', fontSize: '18px' }}>
          Destination:
        </label>
        <select 
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '10px', 
            fontSize: '16px', 
            marginTop: '5px', 
            border: '1px solid #ccc', 
            borderRadius: '5px' 
          }} 
          required
        >
          <option value="">Select a destination</option>
            <option value="Goa">Goa</option>
            <option value="Pondicherry">Pondicherry</option>
            <option value="Kerala ">Kerala </option>
            <option value="Tamilnadu">Tamilnadu</option>
            <option value="Diu and Daman ">Diu and Daman </option>
            <option value="Maharashtra">maharashtra</option>
            <option value="Gujrat">Gujrat</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Leh Ladakh">Leh Ladakh</option>
            <option value="Delhi">Delhi</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Andaman">Andaman</option>
            <option value="Odisha">Odisha</option>
            <option value="Telangana">Telangana</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Assam">Assam</option>
            <option value="Arunachal">Arunachal</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Pune">Pune</option>
            <option value="Gir National Park">Gir National Park</option>
        </select>

        <label style={{ display: 'block', marginTop: '15px', fontSize: '18px' }}>
          Travel Date:
        </label>
        <input 
          type="date" 
          name="travelDate"
          value={formData.travelDate}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '10px', 
            fontSize: '16px', 
            marginTop: '5px', 
            border: '1px solid #ccc', 
            borderRadius: '5px' 
          }} 
          required
        />

        <label style={{ display: 'block', marginTop: '15px', fontSize: '18px' }}>
          Number of Travelers:
        </label>
        <input 
          type="number" 
          name="travelers"
          min="1" 
          value={formData.travelers}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '10px', 
            fontSize: '16px', 
            marginTop: '5px', 
            border: '1px solid #ccc', 
            borderRadius: '5px' 
          }} 
          required
        />

        <button 
          type="submit" 
          style={{ 
            width: '100%', 
            padding: '12px', 
            fontSize: '18px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            marginTop: '20px' 
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
