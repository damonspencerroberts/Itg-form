import React from 'react';

const Information = (props) => {
  return (
    <div class="info">
      <div class="info-details">
        <i class="fas fa-user"></i> 
        <p>{props.firstName} {props.lastName}</p>
      </div>
      <div class="info-details">
        <i class="fas fa-envelope"></i>
        <p>{props.email}</p>
      </div>
      <div class="info-details">
        <i class="fas fa-phone"></i>
        <p>{props.number}</p>
      </div>
      <div class="info-details">
        <i class="fas fa-calendar-alt"></i>
        <p>{props.dob}</p>
      </div>
    </div>
  );
}

export default Information;
