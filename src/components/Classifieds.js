import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Modal, ModalHeader, ModalBody,
  Container, Row, Col,
  Button, Label, ButtonGroup
} from "reactstrap";
import { CLASSIFIEDSDATA } from "../shared/classifiedsdata";
import "./Classifieds.css";
import { Control, LocalForm, Errors } from 'react-redux-form'

const Classifieds = (data) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  }
  const toggleModal2 = () => {
    setModalIsOpen2(!modalIsOpen2);
  }
  const setIndex = (i) => {
    setModalIndex(i);
  }
  function handleSubmit(values) {
    toggleModal(1);
    //this.props.addComment(this.props.campsiteId, values.rating, values.author, values.text);
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
  }
  function LeftNav(props) {
    const maxLength = len => val => !val || (val.length <= len);
    const minLength = len => val => val && (val.length >= len);
    return (
      <React.Fragment>
        <Button outline onClick={toggleModal2} style={{width:"100%"}}><i className="fa fa-pencil fa-lg" /> Post New Listing</Button>
        <br/><br/>
        <ButtonGroup vertical style={{width:"100%"}}>
          <Button>Sort</Button>
          <Button>Newest</Button>
          <Button>Oldest</Button>
          <Button>Price High</Button>
          <Button>Price Low</Button>
        </ButtonGroup>
        <br/><br/>
        <ButtonGroup vertical style={{width:"100%"}}>
          <Button>Filter</Button>
          <Button>Price High</Button>
          <Button>Price Low</Button>
          <Button>Category</Button>
        </ButtonGroup>
        <Modal isOpen={modalIsOpen2} toggle={toggleModal2}>
          <ModalHeader toggle={toggleModal2}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={values => handleSubmit(values)}>
            <div className="form-group">
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  model=".author"
                  id="author"
                  name="author"
                  className="form-control"
                  placeHolder="Your Name"
                  validators={{
                    minLength: minLength(2),
                    maxLength: maxLength(15)
                  }} />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  component="div"
                  messages={{
                    minLength: 'Must be at least 2 characters',
                    maxLength: 'Must be 15 characters or less'
                  }} />
              </div>
              <div className="form-group">
                <Label htmlFor="title">Title</Label>
                <Control.text model=".title" id="title" name="title" className="form-control" />
              </div>
              <div className="form-group">
                <Label htmlFor="price">Price</Label>
                <Control.text model=".price" id="price" name="price" className="form-control" />
              </div>
              <div className="form-group">
                <Label htmlFor="rating">Category</Label>
                <Control.select model=".rating" id="rating" name="rating" className="form-control" defaultValue="Seed+Plants">
                  <option>Seeds+Plants</option>
                  <option>Garden Tools</option>
                  <option>Garden Equipment</option>
                  <option>Soil+Nutrients</option>
                  <option>Garden Fixtures</option>
                </Control.select>
              </div>
              <div className="form-group">
                <Label htmlFor="text">Description</Label>
                <Control.textarea model=".text" id="text" name="text" className="form-control" rows="6" />
              </div>
              <div className="form-group">
                <Button color="primary">Post</Button>
              </div>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
  const classifiedsList = CLASSIFIEDSDATA.map((datas) => {
    return (
      <React.Fragment >
        <Card key={datas.id} style={{ width: "200px", margin: "5px", cursor: "pointer" }} onClick={() => { toggleModal(); setIndex(datas.id); }}>
          <CardImg className="cardimg" src={process.env.PUBLIC_URL + datas.image} alt={datas.name} />
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
      <Container fluid>
        <Row>
          <Col md={2} >
            <LeftNav />
          </Col>
          <Col md={10}>
            <div className="row txtheader">
              <h1 className="title is-1">This is the Classifieds Page</h1>
              <p>
                Check out what other members are selling or post something you would like to sell!
              </p>
            </div>
            <div className="flex-container">

              {classifiedsList}

            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <Modal isOpen={modalIsOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>{CLASSIFIEDSDATA[modalIndex].name}</ModalHeader>
          <ModalBody>
            <img className="modal-img" src={process.env.PUBLIC_URL + CLASSIFIEDSDATA[modalIndex].image} alt="item"></img>
            {CLASSIFIEDSDATA[modalIndex].description}
          </ModalBody>
        </Modal>
      </div>
    </React.Fragment >
  );
};

export default Classifieds;
