import React from 'react';

const Alert = (props) => {
  return (
    <div className="alert">
      <p>{props.alertContent}</p>
    </div>
  );
}

export default Alert;
