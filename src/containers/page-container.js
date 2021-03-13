import React, { useState } from 'react';
import Form from "../components/form/form";
import Modal from "../components/modal/modal";

const PageContainer = () => {
  const options = { 
    month: "long", 
    day: "numeric",
    year: "numeric"
  };

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [userAge, setUserAge] = useState(null);
  
  const handleShowModal = (elements) => {
    setData(elements)
    setShowModal(!showModal);
  }

  const handleSubmit = (e, valueObject, age) => {
    e.preventDefault();
    setUserAge(age);
    const response = {...valueObject};
    handleShowModal(response);
  }

  return (
    <div className="page-container">
      <Form onSubmit = {handleSubmit} />
      {showModal ? <Modal 
        firstName = {data.firstName}
        lastName = {data.lastName}
        email = {data.email}
        number = {data.number}
        dob = {new Intl.DateTimeFormat("en-US", options).format(new Date(data.dob))}
        age = {userAge}
        /> : null }
    </div>
  );
}

export default PageContainer;