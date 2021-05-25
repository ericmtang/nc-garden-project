import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  CardGroup
} from "reactstrap";
import { CLASSIFIEDSDATA } from "../shared/classifiedsdata";

const Classifieds = (data) => {
  const style1 = {
    color: "white",
    textShadow:
      "1px 1px 1px #000000, -1px -1px 1px #000000, -1px 1px 1px #000000, 1px -1px 1px #000000",
  };
  const style2 = {
    width: "100%",
    height: "20vw",
    objectFit: "cover"
  };
  const classifiedsList = CLASSIFIEDSDATA.map((datas) => {
    return (
        <Card key={datas.id} style={{width:"200px", margin: "5px"}}>
          <CardImg width="100%" style={style2} src={process.env.PUBLIC_URL + datas.image} alt-={datas.name} />
          <CardImgOverlay>
            <CardTitle style={style1}>{datas.name}</CardTitle>
          </CardImgOverlay>
          <CardBody>
            <CardTitle>Price: ${datas.price}</CardTitle>
            <CardText >{datas.description}</CardText>
          </CardBody>
        </Card>
    );
  });
  return (
    <div >
      <div className="row" style={style1}>
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
    </div>
  );
};

export default Classifieds;
