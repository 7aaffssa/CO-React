import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const DisplayCard = () => {
  const { state } = useLocation();

  if (!state) {
    return (
      <div>
        <h2>No data to display</h2>
        <Link to="/">Go back to form</Link>
      </div>
    );
  }

  return (
    <div className="card-container">
      <div className="card">
        <h2>User Information</h2>
        <div className="card-content">
          <p><strong>Name:</strong> {state.firstName} {state.lastName}</p>
          <p><strong>Email:</strong> {state.email}</p>
          <p><strong>Contact:</strong> {state.contact}</p>
          <p><strong>Gender:</strong> {state.gender}</p>
          <p><strong>Best Subject:</strong> {state.subject}</p>
          <p><strong>URL:</strong> {state.url}</p>
          <p><strong>About:</strong> {state.about}</p>
          <p><strong>Resume:</strong> {state.resume ? state.resume.name : 'No file uploaded'}</p>
        </div>
        <Link to="/" className="back-button">Back to Form</Link>
      </div>
    </div>
  );
};

export default DisplayCard;