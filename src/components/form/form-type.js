import React, {Fragment as Fr} from "react";
import FormValid from "./form-valid";

const FormType = (props) => {
  return (
    <Fr>
      <label htmlFor={props.for} aria-required>{props.label}<span className="sign-up-form-required"> *</span></label>
      <div className="form-input">
        <input
          className={`${props.activeClass}`}
          placeholder={props.placeholder}
          type={props.type} 
          name={props.name} 
          required
          value = {props.value}
          onChange = {props.change}
          onFocus={props.focus}
          onBlur={props.focusOut}
          />
          <FormValid 
            valid = {props.valid}
            alertContent = {props.alertContent}
          />
      </div>
    </Fr>
  );
}

export default FormType;
