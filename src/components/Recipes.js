import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Modal, ModalHeader, ModalBody, Form, Input, Label, FormGroup, Row, Col, Container, Button, ButtonGroup
} from "reactstrap";
import { RECIPEDATA } from "../shared/recipedata";
import "./Recipes.css";

const Recipes = (data) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [filtRec, setFiltRec] = useState([...RECIPEDATA]);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  }

  const setIndex = (i) => {
    setModalIndex(i);
  }

  const filterRecipe = (list) => {
    console.log("list: " + list);
    if (list.length) {
      console.log("I got here!")
      setFiltRec(RECIPEDATA.filter((recipe) => list.map((a) => recipe.ingredients.map((i) => i.item).includes(a)).reduce((sum, next) => sum && next, true)));
    } else {
      setFiltRec([...RECIPEDATA]);
    }
  }

  function IngChooser(props) {
    const [cSelected, setCSelected] = useState([]);
    const onCheckboxBtnClick = (selected) => {
      const index = cSelected.indexOf(selected);
      if (index < 0) {
        cSelected.push(selected);
      } else {
        cSelected.splice(index, 1);
      }
      setCSelected([...cSelected]);
    }
    return (
      <React.Fragment>
        <ButtonGroup vertical style={{ backgroundColor: "white" }}>
          <Button color="danger">What did you harvest today?</Button>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('onions')} active={cSelected.includes('onions')}>Onions</Button>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('zucchini')} active={cSelected.includes('zucchini')}>Zucchini</Button>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('tomatoes')} active={cSelected.includes('tomatoes')}>Tomatoes</Button>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('cucumbers')} active={cSelected.includes('cucumbers')}>Cucumbers</Button>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('scallions')} active={cSelected.includes('scallions')}>Scallions</Button>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('basil')} active={cSelected.includes('basil')}>Basil</Button>
          <Button onClick={() => filterRecipe(cSelected)} color="success">What Am I Eating Today?</Button>
        </ButtonGroup>
      </React.Fragment>
    );
  };

  const IngList = (props) => {
    //const ingArr = props.ingredients;
    console.log(props);
    return (
      <li></li>
    );
  };

  const recipeList = filtRec.map((datas) => {
    return (
      <React.Fragment >
        <Card key={datas.id} style={{ width: "300px", margin: "5px" }} onClick={() => { toggleModal(); setIndex(datas.id); }}>
          <CardImg className="cardimg" src={process.env.PUBLIC_URL + datas.image} alt-={datas.name} />
          <CardImgOverlay>
            <CardTitle className="txtshadow">{datas.name}</CardTitle>
          </CardImgOverlay>
          <CardBody>
            <CardTitle>Servings: {datas.servings}</CardTitle>
            <CardText ></CardText>
          </CardBody>
        </Card>
        {/*
        <Modal isOpen={modalIsOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>{datas.name}</ModalHeader>
          <ModalBody>{datas.description}</ModalBody>
        </Modal>
        */}
      </React.Fragment>
    );
  });
  return (
    <React.Fragment >
      <Container fluid>
        <Row>
          <Col md={2}>
            <IngChooser />
          </Col>
          <Col md={9}>
            <div className="row txtshadow">
              <h1 className="title is-1">Recipe Finder</h1>
              <p>
                Select the ingredients you would like to use and hit the filter button to see which recipe uses all of those ingredients! Deselect all ingredients to see all recipes.
              </p>
            </div>
            <div className="flex-container">

              {recipeList}

            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <Modal isOpen={modalIsOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>{RECIPEDATA[modalIndex].name}</ModalHeader>
          <ModalBody>
            <img className="modal-img" src={process.env.PUBLIC_URL + RECIPEDATA[modalIndex].image}></img>
            {RECIPEDATA[modalIndex].description}
            Ingredients: <br />
            <ul>
              <IngList ingrs={RECIPEDATA[modalIndex].ingredients} />
            </ul>
            Steps: <br />
            {RECIPEDATA[modalIndex].steps}
          </ModalBody>
        </Modal>
      </div>
    </React.Fragment >
  );
};


export default Recipes;
