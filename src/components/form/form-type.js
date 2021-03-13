import React, {Fragment as Fr} from "react";

const FormType = (props) => {
  return (
    <Fr>
      <label htmlFor={props.for} aria-required>{props.label} <span className="sign-up-form-required">*</span></label>
      <input
        className={`${props.activeClass}`}
        placeholder={props.placeholder}
        type={props.type} 
        name={props.name} 
        required
        value = {props.value}
        onChange = {props.change}
        onFocus={props.focus}
        />
    </Fr>
  );
}

export default FormType;
