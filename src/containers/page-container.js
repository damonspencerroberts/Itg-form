import React, { useState } from 'react';
import Form from "../components/form/form";
import Modal from "../components/modal/modal";

const PageContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  
  const handleShowModal = (elements) => {
    setData(elements)
    setShowModal(!showModal);
  }

  const handleSubmit = (e, valueObject) => {
    e.preventDefault();
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
        dob = {data.dob}
        /> : null }
    </div>
  );
}

export default PageContainer;