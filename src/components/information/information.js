import React from 'react';

const Information = (props) => {
  return (
    <div className="info">
      <div className="info-details">
        <i className="fas fa-user"></i> 
        <p>{props.firstName} {props.lastName}</p>
      </div>
      <div className="info-details">
        <i className="fas fa-envelope"></i>
        <p>{props.email}</p>
      </div>
      <div className="info-details">
        <i className="fas fa-phone"></i>
        <p>{props.number}</p>
      </div>
      <div className="info-details">
        <i className="fas fa-calendar-alt"></i>
        <p>{props.dob}</p>
      </div>
    </div>
  );
}

export default Information;
