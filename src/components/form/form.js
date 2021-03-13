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
  const [shouldBeDisabled, setShouldBeDisabled] = useState(false);

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
    const ukPhone = /^(?:0|\+?44)(?:\d\s?){9,10}$/
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

  const checkDisableButton = (obj) => {
    const allValidValues = [...new Set(Object.values(obj))];
    if (allValidValues[0] === "tick" && allValidValues.length === 1) {
      setShouldBeDisabled(true);
    } else {
      setShouldBeDisabled(false);
    }
  }

  const editChecker = (hash, checker, thingToCheck) => {
    if (thingToCheck && elementValues[checker] !== "") {
      hash[checker] = "tick"
    } else {
      hash[checker] = "cross"
    }
    setValidEl(hash);
    checkDisableButton(hash);
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
          <div class="checkbox-container">
            <input type="checkbox" id="confirmation" required/>
            <label for="confirmation" class="checkbox">Please confirm that all these details are correct. <span className="sign-up-form-required"> *</span></label>
          </div>
          <input type="submit" className={shouldBeDisabled ? null : "disabled"} disabled = {!shouldBeDisabled} />
        </form>
      </div>
    </Fr>
  )
}

export default Form;
