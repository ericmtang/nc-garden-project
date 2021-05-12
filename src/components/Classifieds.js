import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { CLASSIFIEDSDATA } from "../shared/classifiedsdata";
import classdata from "../shared/classifiedsdata1.json";

const Classifieds = (data) => {
  const data1 = CLASSIFIEDSDATA;
  const style1 = {
    color: "white",
    textShadow:
      "1px 1px 1px #000000, -1px -1px 1px #000000, -1px 1px 1px #000000, 1px -1px 1px #000000",
  };
  const classifiedsList = CLASSIFIEDSDATA.map((datas) => {
    return (
      <div key={datas.id} className="col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={datas.image} alt-={datas.name} />
          <CardImgOverlay>
            <CardTitle style={style1}>{datas.name}</CardTitle>
          </CardImgOverlay>
          <CardBody>
            <h5>Price: ${datas.price}</h5>
            <p>{datas.description}</p>
          </CardBody>
        </Card>
      </div>
    );
  });
  return (
    <div className="container" >
      <div className="row" style={style1}>
        <h1 className="title is-1">This is the Classifieds Page</h1>
        <p>
          Donec et odio pellentesque diam volutpat commodo sed. Pulvinar etiam
          non quam lacus suspendisse faucibus interdum. Amet massa vitae tortor
          condimentum lacinia quis vel. Ullamcorper a lacus vestibulum sed arcu
          non. Urna condimentum mattis pellentesque id nibh tortor id aliquet
          lectus. Egestas diam in arcu cursus euismod quis. Ut consequat semper
          viverra nam libero justo. Quis enim lobortis scelerisque fermentum dui
          faucibus. Laoreet suspendisse interdum consectetur libero id.
          Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
          tristique senectus et. Diam ut venenatis tellus in metus vulputate eu
          scelerisque felis. Dui vivamus arcu felis bibendum ut tristique et.
          Pellentesque habitant morbi tristique senectus et netus et malesuada.
        </p>
      </div>
      <div className="row">{classifiedsList}</div>
      <div className="row">--bottom div--</div>
    </div>
  );
};

export default Classifieds;
