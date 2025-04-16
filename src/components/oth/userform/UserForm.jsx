import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    gender: 'Male',
    subject: 'Math',
    resume: null,
    url: '',
    about: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/display', { state: formData });
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      gender: 'Male',
      subject: 'Math',
      resume: null,
      url: '',
      about: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Form in React</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Enter Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group">
          <label>Contact*</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter Mobile number"
            required
          />
        </div>

        <div className="form-group">
          <label>Gender*</label>
          <div className="radio-group">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            /> Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            /> Female
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === 'Other'}
              onChange={handleChange}
            /> Other
          </div>
        </div>

        <div className="form-group">
          <label>Your best Subject</label>
          <select name="subject" value={formData.subject} onChange={handleChange}>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="English">English</option>
          </select>
        </div>

        <div className="form-group">
          <label>Upload Resume*</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Enter URL*</label>
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Enter url"
            required
          />
        </div>

        <div className="form-group">
          <label>About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="About yourself"
          />
        </div>

        <div className="button-group">
          <button type="button" onClick={handleReset}>Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;