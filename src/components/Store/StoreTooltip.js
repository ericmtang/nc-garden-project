import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import './StoreTooltip.css'

export default function Example(props) {
  return (
    <div>
      <span className={props.color} id={props.id} href="#">{props.title}</span>
      {/* <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="UncontrolledTooltipExample">tooltip</span>.</p> */}
      <UncontrolledTooltip style={{backgroundColor: props.bgColor, color:'white'}} placement="right" target={props.id}>
        {props.info}
      </UncontrolledTooltip>
    </div>
  );
}