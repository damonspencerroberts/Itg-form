import React, { useState, Fragment as Fr } from "react" ;
import Header from "../header/header";
import FormType from "./form-type";
import FormContent from "./form-content";

const Form = (props) => {
  const values = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "number": "",
    "dob": ""
  }

  const [elementValues, setElementValues] = useState(values);
  const [activeElement, setActiveElement] = useState('first-name');
  const [valid, setValidEl] = useState(values);

  const handleActive = (check) => {
    return activeElement === check ? "form-active-class" : "";
  }

  const setElement = (el, val) => {
    const curElementValues = {...elementValues};
    curElementValues[el] = val;
    setElementValues(curElementValues);
  }

  const checkOnlyString = (el) => {
    return /^[a-zA-Z]*$/.test(el);
  }

  const checkPhone = (el) => {
    const ukPhone = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/
    return ukPhone.test(el);
  }

  const checkEmail = (el) => {
    return /^\S+@\S+\.\S+$/.test(el);
  }

  const calculateAge = (birthday) => { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  } 

  const editChecker = (hash, checker, thingToCheck) => {
    if (thingToCheck && elementValues[checker] !== "") {
      hash[checker] = "tick"
    } else {
      hash[checker] = "cross"
    }
    setValidEl(hash);
  }

  const checkValidity = (checker) => {
    const curValid = {...valid}
    if (checker === "firstName" || checker === "lastName") {
      editChecker(curValid, checker, checkOnlyString(elementValues[checker]))
    }
    if (checker === "email") {
      editChecker(curValid, checker, checkEmail(elementValues[checker]))
    }
    if (checker === "number") {
      editChecker(curValid, checker, checkPhone(elementValues[checker]))
    }
    if (checker === "dob") {
      editChecker(curValid, checker, calculateAge(new Date(elementValues[checker])) >= 18)
    }
  }

  const handleAlertContent = (el) => {
    let final;
    switch (el) {
      case "first-name":
        final = "First name must only contain letters.";
        break;
      case "last-name":
        final = "Last name must only contain letters.";
        break;
      case "email":
        final = "Email must be formatted properly.";
        break;
      case "number":
        final = "Phone number must be a UK number";
        break;
      case "dob":
        final = "You must be over 18 to sign up";
        break;
      default:
        final = "Error in input"
        break;
    }
    return final;
  }

  const displayForm = FormContent.map((e, i) => {
    return (
      <Fr key = {i}>
        <FormType
          for = {e.title}
          label = {e.label}
          placeholder = {e.place}
          type = {e.type}
          name = {e.title}
          value = {elementValues[e.element]}
          change = {(event) => setElement(e.element, event.currentTarget.value)}
          focus = {() => setActiveElement(e.title)}
          activeClass = {handleActive(e.title)}
          valid = {valid[e.element]}
          focusOut = {() => checkValidity(e.element)}
          alertContent = {handleAlertContent(e.title)}
        />
      </Fr>
    );
  });

  return (
    <Fr>
      <Header title = "Sign up" />
      <div className="form-container">
        <form className = "sign-up-form" onSubmit={(e) => props.onSubmit(e, elementValues)}>
          {displayForm}
          <input type="submit" className={"disabled"} disabled/>
        </form>
      </div>
    </Fr>
  )
}

export default Form;
