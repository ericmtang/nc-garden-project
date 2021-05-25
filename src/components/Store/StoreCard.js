import React, { useState } from 'react';
import storeCardData from '../../shared/storeCardData'
import StoreModal from './StoreModal';
import './StoreCard.css'

const StoreCard = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const cardData = storeCardData.map(cardData => {
        return (<div className="col-lg-3 col-md-4 col-sm-6 text-center">
            <div className="boxhover">
                <a href="/nc-garden-project#/store/detail">
                <img className="imageContainer" src={cardData.image}></img>
                </a>
                <div className="overlay" onClick={toggle}>Quick View</div>
            </div>
            <p>{cardData.name}</p>
            <StoreModal modalChange={modal} toggleChange={toggle}></StoreModal>


        </div>
        )
    })

    return (<React.Fragment>
        {cardData}
    </React.Fragment>)

}

export default StoreCard