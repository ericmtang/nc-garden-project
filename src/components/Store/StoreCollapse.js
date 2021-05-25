import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import './StoreCollapse.css'

const StoreCollapse = (props) => (
  <div>
    <div className="store-CollapseBackground row" color="primary" id={props.id} style={{ marginBottom: '.7rem' }}>
        <div className="col my-auto">
            <p className="store-CollapseFont">{props.title}</p>
        </div>
        
        
        <div className="col">
            <span className="store-CollapseFloat mt-1">
                {props.lastFrost}
            </span>
            <br></br>
            <p className="store-CollapseFloat">
                {props.firstFrost}
            </p>
        </div>
        
     
      
    </div>
    <UncontrolledCollapse toggler={"#"+props.id}>
      <Card>
        <CardBody>
          {props.body}
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default StoreCollapse;