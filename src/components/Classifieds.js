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
  Button, Label, ButtonGroup, InputGroup, Input,
  ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle
} from "reactstrap";
import "./Classifieds.css";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Fade } from 'react-animation-components';

const Classifieds = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [sortType, setSortType] = useState({ type: 'id', dir: true });
  const [dropdownOpen, setOpen] = useState(false);
  const [filterType, setFilter] = useState({ low: null, high: null, category: '' });
  const toggleDropdown = () => setOpen(!dropdownOpen);
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
    toggleModal2();
    props.postAd(values.user, values.title, values.price, values.description, values.category);
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
  }
  function sortPriceLow() {
    setSortType({ type: 'price', dir: true });
  }
  function sortPriceHigh() {
    setSortType({ type: 'price', dir: false });
  }
  function sortDateLow() {
    setSortType({ type: 'date', dir: true });
  }
  function sortDateHigh() {
    setSortType({ type: 'date', dir: false });
  }
  function clearFilter() {
    setFilter({ low: '', high: '', category: '' });
  }
  const sortedAds = () => {
    console.log(sortType);
    const sortedArr = [...props.classifiedsData];
    console.log(sortedArr[0].[sortType.type]);
    if (sortType.type === 'date') {
      return sortedArr.sort((a, b) => sortType.dir ? a.[sortType.type].localeCompare(b.[sortType.type]) : b.[sortType.type].localeCompare(a.[sortType.type]));
    } else {
      return sortedArr.sort((a, b) => sortType.dir ? a.[sortType.type] - b.[sortType.type] : b.[sortType.type] - a.[sortType.type]);
    }
  }
  const filteredAds = (arr) => {
    console.log("filter: " + Object.entries(filterType));
    console.log("item cat: " + arr[arr.length - 1].category);
    //console.log("items cats: "+arr.map(item=>item.id+item.category));
    console.log(filterType.category === arr[arr.length - 1].category);
    return arr.filter((a) => filterType.category ? filterType.category === a.category : true).filter((a) => filterType.high ? filterType.high >= a.price : true).filter((a) => filterType.low ? filterType.low <= a.price : true);
  }
  function LeftNav(props) {
    const maxLength = len => val => !val || (val.length <= len);
    const minLength = len => val => val && (val.length >= len);
    return (
      <React.Fragment>
        <Button outline onClick={toggleModal2} style={{ width: "100%" }}><i className="fa fa-pencil fa-lg" /> Post New Listing</Button>
        <br /><br />
        <ButtonGroup vertical style={{ width: "100%" }}>
          <Button>Sort</Button>
          <Button onClick={sortDateHigh} outline>Newest</Button>
          <Button onClick={sortDateLow} outline>Oldest</Button>
          <Button onClick={sortPriceHigh} outline>Price High</Button>
          <Button onClick={sortPriceLow} outline>Price Low</Button>
        </ButtonGroup>
        <br /><br />
        <Button style={{ width: "100%" }}>Filter</Button>
        <Input style={{ width: "100%" }} placeholder="$ Min Price" type="number" onBlur={(e) => setFilter({ ...filterType, low: e.target.value })} ></Input>
        <Input style={{ width: "100%" }} placeholder="$ Max Price" type="number" onBlur={(e) => setFilter({ ...filterType, high: e.target.value })}></Input>
        <Button style={{ width: "100%" }} outline onClick={() => setFilter({ ...filterType, high: 100 })}>Under 100</Button>
        <Button style={{ width: "100%" }} outline onClick={() => setFilter({ ...filterType, low: 10 })}>Over 10</Button>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown} style={{ width: "100%" }}>
          <DropdownToggle caret outline>
            Category
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setFilter({ ...filterType, category: 'Seeds and Plants' })}>Seeds and Plants</DropdownItem>
            <DropdownItem onClick={() => setFilter({ ...filterType, category: 'Garden Tools' })}>Garden Tools</DropdownItem>
            <DropdownItem onClick={() => setFilter({ ...filterType, category: 'Garden Equipment' })}>Garden Equipment</DropdownItem>
            <DropdownItem onClick={() => setFilter({ ...filterType, category: 'Soil and Nutrients' })}>Soil and Nutrients</DropdownItem>
            <DropdownItem onClick={() => setFilter({ ...filterType, category: 'Garden Fixtures' })}>Garden Fixtures</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <br /><br />
        <Button style={{ width: "100%" }} onClick={() => clearFilter()}>Clear Filter</Button>
        <Modal isOpen={modalIsOpen2} toggle={toggleModal2}>
          <ModalHeader toggle={toggleModal2}>Post New Classifieds Ad</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={values => handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="user">Your Name</Label>
                <Control.text
                  model=".user"
                  id="user"
                  name="user"
                  className="form-control"
                  placeholder="Your Name"
                  validators={{
                    minLength: minLength(2),
                    maxLength: maxLength(15)
                  }} />
                <Errors
                  className="text-danger"
                  model=".user"
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
                <Label htmlFor="price">Price ($)</Label>
                <Control.text type="number" model=".price" id="price" name="price" className="form-control" />
              </div>
              <div className="form-group">
                <Label htmlFor="category">Category</Label>
                <Control.select model=".category" id="category" name="category" className="form-control" defaultValue="Seed+Plants">
                  <option>Seeds and Plants</option>
                  <option>Garden Tools</option>
                  <option>Garden Equipment</option>
                  <option>Soil and Nutrients</option>
                  <option>Garden Fixtures</option>
                </Control.select>
              </div>
              <div className="form-group">
                <Label htmlFor="description">Description</Label>
                <Control.textarea model=".description" id="description" name="description" className="form-control" rows="6" />
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
  const classifiedsList =
    filteredAds(sortedAds())
      .map((datas) => {
        return (
          <React.Fragment key={datas.id}>
            <Fade in out>
              <Card style={{ width: "200px", margin: "5px", cursor: "pointer" }} onClick={() => { toggleModal(); setIndex(datas.id); }}>
                <CardImg className="cardimg" src={process.env.PUBLIC_URL + datas.image} alt={datas.title} />
                <CardImgOverlay>
                  <CardTitle className="txtshadow">{datas.title}</CardTitle>
                </CardImgOverlay>
                <CardBody>
                  <CardTitle>Price: ${datas.price}</CardTitle>
                  <CardText >Posted: {datas.date.slice(0,10)}</CardText>
                </CardBody>
              </Card>
            </Fade>
          </React.Fragment>
        );
      });
  return (
    <React.Fragment >
      <Container fluid className="mt-3">
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
          <ModalHeader toggle={toggleModal}>{props.classifiedsData[modalIndex].title}</ModalHeader>
          <ModalBody>
            <img className="modal-img" src={process.env.PUBLIC_URL + props.classifiedsData[modalIndex].image} alt="item"></img>
            {props.classifiedsData[modalIndex].description}
            {props.classifiedsData[modalIndex].category}
          </ModalBody>
        </Modal>
      </div>
    </React.Fragment >
  );
};

export default Classifieds;
