import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import './StoreVideoModal.css'

const ModalVideo = (props) => {

//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

  return (
    <div className="col">
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal size="md" isOpen={props.modal} toggle={props.toggle}  className="store-VideoModal">
        <ModalBody>
            <iframe title="Garden 101" className="store-iFrameVideo" width="420" height="315" allow="fullscreen"
                src="https://www.youtube.com/embed/Ov6cChHOoZQ">
            </iframe>
            
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalVideo;