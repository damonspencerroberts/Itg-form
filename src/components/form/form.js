import React, { useState, Fragment as Fr } from "react" ;
import Header from "../header/header";
import FormType from "./form-type";

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [dob, setDob] = useState('');
  const [activeElement, setActiveElement] = useState('first-name')

  const handleSubmit = () => {
    alert(`
      First: ${firstName},
      Last: ${lastName},
      Email: ${email},
      Number: ${number},
      Dob: ${dob}
    `);
  }

  const handleActive = (check) => {
    return activeElement === check ? "form-active-class" : "";
  }

  return (
    <Fr>
      <Header title = "Sign up" />
      <div className="form-container">
        <form className = "sign-up-form" onSubmit={handleSubmit}>
          <FormType 
            for = "first-name"
            label = "First name "
            placeholder = "Phillip"
            type = "text"
            name = "first-name"
            value = {firstName}
            change = {(e) => setFirstName(e.target.value)}
            focus = {() => setActiveElement('first-name')}
            activeClass = {handleActive("first-name")}
          />
          <FormType 
            for = "last-name"
            label = "Last name "
            placeholder = "Robinson"
            type = "text"
            name = "last-name"
            value = {lastName}
            change = {(e) => setLastName(e.target.value)}
            focus = {() => setActiveElement('last-name')}
            activeClass = {handleActive("last-name")}
          />
          <FormType 
            for = "email"
            label = "Email "
            placeholder = "philliprobinson@gmail.com"
            type = "email"
            name = "email"
            value = {email}
            change = {(e) => setEmail(e.target.value)}
            focus = {() => setActiveElement('email')}
            activeClass = {handleActive("email")}
          />
          <FormType 
            for = "phone-number"
            label = "Phone number "
            placeholder = "07378123456"
            type = "text"
            name = "phone-number"
            value = {number}
            change = {(e) => setNumber(e.target.value)}
            focus = {() => setActiveElement('number')}
            activeClass = {handleActive("number")}
          />
          <FormType 
            for = "dob"
            label = "Date of birth "
            placeholder = "01/01/91"
            type = "date"
            name = "dob"
            value = {dob}
            change = {(e) => setDob(e.target.value)}
            focus = {() => setActiveElement('dob')}
            activeClass = {handleActive("dob")}
          />
          <input type="submit" />
        </form>
      </div>
    </Fr>
  )
}

export default Form;
