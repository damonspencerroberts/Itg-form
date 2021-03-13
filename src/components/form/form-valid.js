import React, { Fragment } from 'react';
import Alert from "../alert/alert";

const FormValid = (props) => {
  let el;
  const workOutValid = () => {
    if (props.valid === "tick") {
      el = <i className="fas fa-check-circle fa-3x form-icon form-icon-green"></i>
    } else if (props.valid === "cross") {
      el = (
        <div class="form-valid">
          <i className="fas fa-times-circle fa-3x form-icon form-icon-red"></i>
          <Alert alertContent = {props.alertContent} />
        </div>
      );
    } else {
      el = null;
    }
    return el;
  }
  
  return (
    <div>
      {workOutValid()}
    </div>
  );
}

export default FormValid;
