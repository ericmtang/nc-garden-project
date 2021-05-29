import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Input} from 'reactstrap';
import StoreCarousel from './StoreCarousel';
import './StoreModal.css';

const ModalExample = (props) => {
  const {
    className
  } = props;

    //   const [modal, setModal] = useState(false);

    // const toggle = () => setModal(!props.modalChange);

  return (
    <div className="modal">
      
      <Modal size="xl" isOpen={props.modalChange} toggle={props.toggleChange} className={className}>
        <ModalHeader toggle={props.toggleChange} charCode="X" style={{border:"1px solid #fff"}}></ModalHeader>
        <ModalBody>
          <div className="row">
                <div className="col-lg-5">
                    <StoreCarousel></StoreCarousel>
                </div>

                <div className="col-lg-7">
                    <h4>Tomato, Atlas Hybrid</h4>
                    <h4>First-ever beefsteaks for porches and decks in warm, sunny conditions everywhere.</h4>
                    <p>Pick big, tasty beefsteaks right outside your door! First-ever beefsteaks for porches and decks in warm, sunny conditions everywhere. New bushy, compact ‘Atlas’ plants easily shoulder their bountiful loads of one-pound tomatoes. This vigorous, neatly growing paragon of the patio combines modern performance with old-time flavor. Fruits deliver unsurpassed balance of sweetness and acidity. Semi-determinate plants.</p>
                        <div className="row">
                            <div className="col-4">
                                <h5>Type</h5>
                                <p>BeefSteak</p>
                            </div>
                            <div className="col-4">
                                <h5>Fruit Bearing</h5>
                                <p>Determinate</p>
                            </div>
                            <div className="col-4">
                                <h5>Days To Maturity</h5>
                                <p>65-75 days</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h5>Fruit Weight</h5>
                                <p>14-20 ounces</p>
                            </div>
                            <div className="col-4">
                                <h5>Sun</h5>
                                <p>Full Sun</p>
                            </div>
                            <div className="col-4">
                                <h5>Spread</h5>
                                <p>36-40 inches</p>
                            </div>
                        </div>
                        <div className="row modal-backgroundColor">
                            <div className="col-4">
                                <p className="modal-align">Item #</p>
                            </div>
                            <div className="col-4">
                                <p className="modal-align">Quantity</p>
                            </div>
                            <div className="col-4">
                                <p className="modal-align">Price</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <p> Item#:54350A 1 Pkt. (25 seeds)</p>
                            </div>
                            <div className="col-4">
                                <Input className="w-50" placeholder="1"></Input>
                            </div>
                            <div className="col-4">
                                <p>$6.95</p>
                            </div>
                        </div>
                        <div className="row">
                            <a href="#/Store" className="col">Add to Wish List</a>
                            <div className="col">
                                <Button onClick={props.toggleChange} className="modal-float-right" color="primary">Add To Cart</Button>
                            </div>
                        </div>
                </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalExample;
