import React, { useState } from 'react';
import { Button } from 'reactstrap';
import StoreReviewModel from './StoreReviewModel';
import StoreRating from './StoreRating';
import { STOREREVIEWDATA } from '../../shared/storeReviewData';
import StoreChartBar from './StoreChartBar';
import storeChartBarData from '../../shared/storeChartBarData';
import './StoreReview.css';


const StoreReview = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [storeReview, setStoreReview] = useState(STOREREVIEWDATA);

    const saveReviewDataHandler = (enterReviewData) => {
        const reviewData = {
            ...enterReviewData,
            id: ((Math.random()*Math.random())/Math.random()).toString()
        };
        setStoreReview((prevStoreReview) => {
            return [reviewData, ...prevStoreReview];
        })
    }


    return (
        <div className="row">
            <StoreReviewModel onSaveReviewData={saveReviewDataHandler} modal={modal} toggle={toggle}></StoreReviewModel>
            <div className="row mb-3">
                <h3 className="col">Reviews</h3>
                <Button color="primary" className="col-3" onClick={toggle}>Write a Review</Button>
            </div>
            <StoreChartBar formatBar={storeChartBarData} chartBar={storeReview} />
            <hr className="mt-3"></hr>
            {/* User Ratings */}
            <StoreRating review={storeReview}/>

        </div>
    )
}

export default StoreReview;