import React from 'react';
import { Button, UncontrolledPopover, PopoverBody } from 'reactstrap';
import './StorePopover.css'

const Example = (props) => {
  return (
    <>
      <Button size="sm" className="store-PopOverBackground"  style={{ backgroundColor: props.color }} id={props.target} type="button">
        {props.inside}
      </Button>

      <UncontrolledPopover trigger="focus" placement="bottom" target={props.target}>
        <PopoverBody>{props.info}</PopoverBody>
      </UncontrolledPopover>

    </>
  );
}

export default Example;