import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Modal, ModalHeader, ModalBody, Row, Col, Container, Button, ButtonGroup
} from "reactstrap";
import { RECIPEDATA } from "../shared/recipedata";
import "./Recipes.css";

const Recipes = (data) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [filtRec, setFiltRec] = useState([...RECIPEDATA]);
  const [cSelected, setCSelected] = useState([]);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  }

  const setIndex = (i) => {
    setModalIndex(i);
  }

  const filterRecipe = (list) => {
    //console.log("list: " + list);
    if (list.length) {
      //console.log("I got here!")
      setFiltRec(RECIPEDATA.filter((recipe) => list.map((a) => recipe.ingredients.map((i) => i.item).includes(a)).reduce((sum, next) => sum && next, true)));
    } else {
      setFiltRec([...RECIPEDATA]);
    }
  }

  const IngUsed = () => {
    console.log("cSelected: "+cSelected+", length: "+cSelected.length);
    if (cSelected.length > 0) {
      return (
        <span>
          These recipes contain your selected ingredients [{cSelected.join(", ")}]:
        </span>
      );
    } else {
      return null;
    }
  };

  function IngChooser(props) {
    //const [cSelected, setCSelected] = useState([]);
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
        <span style={{display: "inline-block", borderRadius: "4px", color: "white", backgroundColor: "rgb(25, 135, 84)", padding: "4px"}}>Select Ingredients From Your Garden:</span>
        <br />
        <ButtonGroup vertical style={{ backgroundColor: "white", width: "100%" }}>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('onions')} active={cSelected.includes('onions')}>Onions</Button>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('zucchini')} active={cSelected.includes('zucchini')}>Zucchini</Button>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('tomatoes')} active={cSelected.includes('tomatoes')}>Tomatoes</Button>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('corn')} active={cSelected.includes('corn')}>Corn</Button>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('carrots')} active={cSelected.includes('carrots')}>Carrots</Button>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('cucumbers')} active={cSelected.includes('cucumbers')}>Cucumbers</Button>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('scallions')} active={cSelected.includes('scallions')}>Scallions</Button>
          <Button outline color="primary" onClick={() => onCheckboxBtnClick('basil')} active={cSelected.includes('basil')}>Basil</Button>
        </ButtonGroup>
        <br /><br />
        <Button onClick={() => filterRecipe(cSelected)} style={{cursor: "pointer", width: "100%"}} color="success">Tell Me What to Cook!</Button>
      </React.Fragment>
    );
  };

  const IngList = (props) => {
    //const ingArr = props.ingredients;
    console.log("ingredients: "+props.ingrs.ingredients);
    return (props.ingrs.map((ing, index) => <li key={index}>{ing.quantity} {ing.unit} {ing.item}</li>));
  };

  const StepList = (props) => {
    console.log(props.steps);
    return (props.steps.map((step, index) => <li key={index}>{step}</li>));
  };

  const PopModal = (props) => {
    return (
      <Modal isOpen={modalIsOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>{RECIPEDATA[modalIndex].name}</ModalHeader>
      <ModalBody>
        <img className="modal-img" src={process.env.PUBLIC_URL + RECIPEDATA[modalIndex].image}></img>
        {RECIPEDATA[modalIndex].description}
        <br /><br />
        <u>Ingredients:</u>
        <br />
        <ul>
          <IngList ingrs={RECIPEDATA[modalIndex].ingredients} />
        </ul>
        <u>Steps:</u>
        <br />
        <ul className="">
          <StepList steps={RECIPEDATA[modalIndex].steps} />
        </ul>
      </ModalBody>
    </Modal>
    );
  };

  const recipeList = filtRec.map((datas) => {
    return (
      <React.Fragment >
        <Card key={datas.id} style={{ width: "300px", margin: "5px", cursor: "pointer" }} onClick={() => { toggleModal(); setIndex(datas.id); }}>
          <CardImg className="cardimg" src={process.env.PUBLIC_URL + datas.image} alt-={datas.name} />
          <CardImgOverlay>
            <CardTitle className="txtshadow">{datas.name}</CardTitle>
          </CardImgOverlay>
          <CardBody>
            <CardTitle>Servings: {datas.servings}</CardTitle>
            <CardText >Credit: {datas.author}</CardText>
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
            <IngChooser />
          </Col>
          <Col md={10}>
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
        <PopModal />
      </div>
    </React.Fragment >
  );
};


export default Recipes;
