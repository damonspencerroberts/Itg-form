import React from 'react';
import Header from '../header/header';
import Information from "../information/information";

const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <Header 
          title = "Thank you for signing up" 
          content = "Here is a summary of your information."
        />
        <Information 
          firstName = {props.firstName}
          lastName = {props.lastName}
          email = {props.email}
          number = {props.number}
          dob = {props.dob}
          age = {props.age}
        />
        <button className="modal-button" onClick = {() => window.location.reload()}>Return home</button>
      </div>
    </div>
  );
}

export default Modal;
