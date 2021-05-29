import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormFeedback  } from 'reactstrap';
import './StoreReviewModel.css';

const StoreReviewModel = (props) => {
    const {
        className
    } = props;

    //   const [modal, setModal] = useState(false);

    //   const toggle = () => setModal(!modal);

    const [starRating, setStartRating] = useState('');
    const [enterTitle, setEnterTitle] = useState('');
    const [enterText, setEnterText] = useState('');
    const [enterName, setEnterName] = useState('');

    const [touched, setTouched] = useState({
        name: false,
        title: false,
        text: false,
        star: false
    })

    const validate = (name, title, text, star) => {

        const errors = {
            name: "",
            title: "",
            text: "",
            star: ""
        }

        if(touched.name) {
            if(enterName.length < 3) {
                errors.name = "Name must be at least 3 characters"
            } else if (enterName.length > 15) {
                errors.name = "Name must be 15 characters or less"
            }
        }

        if(touched.title) {
            if(enterTitle.length < 3) {
                errors.title = "Title must be at least 3 characters"
            } else if (enterTitle.length > 35) {
                errors.title = "Title must be 35 characters or less"
            }
        }

        if(touched.text) {
            if(enterText.length < 15) {
                errors.text = "Text must be at least 15 characters"
            } else if (enterText.length > 500) {
                errors.text = "Text must be 500 characters or less"
            }
        }

        if(touched.star) {
            if(starRating.length === 0) {
                errors.star = "Please choose a rating"
            }
        }

        return errors;
    }

    let formIsValid = false;
    
    if(enterName.length > 2 && enterName.length < 15 && enterTitle.length > 2 && enterText.length > 2 && starRating) {
        formIsValid = true;
    }

   const handleBlur = (field) => () => {
        setTouched( {[field] : "true"})
    }

    const nameChangedHandler = (event) => {
        setEnterName(event.target.value);
    }

    const starChangedHandler = (event) => {
        setStartRating(event.target.value);
    }

    const titleChangedHandler = (event) => {
        setEnterTitle(event.target.value);
    }

    const textChangedHandler = (event) => {
        setEnterText(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const reviewData = {
            name: enterName,
            star: starRating,
            title: enterTitle,
            text: enterText
        };

        props.onSaveReviewData(reviewData);
        props.toggle()
        setStartRating('');
        setEnterTitle('');
        setEnterText('');
        setEnterName('');
    }

    const errors = validate(enterName, enterTitle, enterText, starRating)

    return (
        <div>
            {/* <Button color="danger" onClick={props.toggle}>{buttonLabel}</Button> */}
            <Modal isOpen={props.modal} toggle={props.toggle} className={className}>
                <ModalHeader toggle={props.toggle}>Review</ModalHeader>
                <ModalBody>
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <Label for="exampleSelect">Overall Rating</Label>
                            <Input invalid={errors.star} onBlur={handleBlur("star")} defaultValue={starRating} onChange={starChangedHandler} type="select" name="select" id="exampleSelect">
                                <option value="" selected disabled hidden>Choose here</option>
                                <option>1 Star</option>
                                <option>2 Star</option>
                                <option>3 Star</option>
                                <option>4 Star</option>
                                <option>5 Star</option>
                            </Input>
                            <FormFeedback>{errors.star}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="mt-3">
                            <Label for="exampleName">Name</Label>
                            <Input invalid={errors.name} onBlur={handleBlur("name")} defaultValue={enterName} onChange={nameChangedHandler} type="text" name="text" id="exampleName" placeholder="Enter Name" />
                            <FormFeedback>{errors.name}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="mt-3">
                            <Label for="exampleTitle">Title</Label>
                            <Input invalid={errors.title} onBlur={handleBlur("title")} defaultValue={enterTitle} onChange={titleChangedHandler} type="text" name="text" id="exampleTitle" placeholder="Example: Great Plant!" />
                            <FormFeedback>{errors.title}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="mt-3 mb-3">
                            <Label for="exampleText">Text Area</Label>
                            <Input invalid={errors.text} onBlur={handleBlur("text")} defaultValue={enterText} onChange={textChangedHandler} type="textarea" rows="10" name="text" id="exampleText" placeholder="Example: I am so glad I bought this!" />
                            <FormFeedback>{errors.text}</FormFeedback>
                        </FormGroup>
                        <div className="row">
                        <div className="col">
                        <Button size="lg" className="storeReviewModalFloat m-1" color="secondary" onClick={props.toggle}>Cancel</Button>{' '}
                        <Button disabled={!formIsValid} size="lg" className="storeReviewModalFloat m-1" color="primary" type="submit">Submit</Button>{' '}
                        </div>
                       </div>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default StoreReviewModel;