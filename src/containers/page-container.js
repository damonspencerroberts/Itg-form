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

  return (
    <div className="page-container">
      <Form showModal = {handleShowModal} />
      {showModal ? <Modal 
        firstName = {data.first}
        lastName = {data.last}
        email = {data.email}
        number = {data.number}
        dob = {data.dob}
        /> : null }
    </div>
  );
}

export default PageContainer;