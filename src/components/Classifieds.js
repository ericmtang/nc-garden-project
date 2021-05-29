import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Modal, ModalHeader, ModalBody
} from "reactstrap";
import { CLASSIFIEDSDATA } from "../shared/classifiedsdata";
import "./Classifieds.css";

const Classifieds = (data) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  }
  const setIndex = (i) => {
    setModalIndex(i);
  }
  const classifiedsList = CLASSIFIEDSDATA.map((datas) => {
    return (
      <React.Fragment >
        <Card key={datas.id} style={{ width: "200px", margin: "5px", cursor: "pointer" }} onClick={()=>{toggleModal(); setIndex(datas.id);}}>
          <CardImg className="cardimg" src={process.env.PUBLIC_URL + datas.image} alt-={datas.name} />
          <CardImgOverlay>
            <CardTitle className="txtshadow">{datas.name}</CardTitle>
          </CardImgOverlay>
          <CardBody>
            <CardTitle>Price: ${datas.price}</CardTitle>
            <CardText >Location: USA</CardText>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  });
  return (
    <React.Fragment >
      <div className="row txtheader">
        <h1 className="title is-1">This is the Classifieds Page</h1>
        <p>
          Donec et odio pellentesque diam volutpat commodo sed. Pulvinar etiam
          non quam lacus suspendisse faucibus interdum. Amet massa vitae tortor
          condimentum lacinia quis vel. Ullamcorper a lacus vestibulum sed arcu
          non. Urna condimentum mattis pellentesque id nibh tortor id aliquet
          lectus. Egestas diam in arcu cursus euismod quis.
        </p>
      </div>
      <div className="flex-container">

        {classifiedsList}

      </div>
      <div>
        <Modal isOpen={modalIsOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>{CLASSIFIEDSDATA[modalIndex].name}</ModalHeader>
          <ModalBody>
            <img className="modal-img" src={process.env.PUBLIC_URL + CLASSIFIEDSDATA[modalIndex].image}></img>
            {CLASSIFIEDSDATA[modalIndex].description}
          </ModalBody>
        </Modal>
      </div>
    </React.Fragment >
  );
};

export default Classifieds;
