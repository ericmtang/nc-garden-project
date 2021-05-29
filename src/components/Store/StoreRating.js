import React from 'react';
import './StoreRating.css';

const StoreRating = (props) => {
    const storeReviewDisplay = props.review.map(review => {
        return(
        <React.Fragment>
            <div className="storeRatingBackground">
                <div className="row" key={review.id}>
                    <div className="col">
                    <p>{review.name}</p>
                    <p>{review.star} - <span className="storeRatingBoldText">{review.title}</span></p>
                    </div>
                </div>


                <div className="col">
                    <p>{review.text}</p>
                </div>
            </div>
            <hr></hr>
                
            
        </React.Fragment>
        )})

    return(
    <div>
        {storeReviewDisplay}
    </div>)
}

export default StoreRating;