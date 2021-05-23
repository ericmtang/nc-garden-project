import React from 'react';
import './StoreProductDetails.css';

const StoreProductDetails = () => {
    return (
        <React.Fragment>
            <div className="row store-productDetailText">
                <div className="col">
                    <p className="store-productDetailBold">Type:</p>
                </div>
                <div className="col">
                    <p>Beefsteak</p>
                </div>
                <div className="col">
                    <p className="store-productDetailBold">Fruit Bearing </p>
                </div>
                <div className="col">
                    <p>Indeterminate</p>
                </div>
            </div>
            <div className="row store-productDetailText">
                <div className="col">
                    <p className="store-productDetailBold">Days To Maturity:</p>
                </div>
                <div className="col">
                    <p>75-80 days</p>
                </div>
                <div className="col">
                    <p className="store-productDetailBold">Fruit Weight:</p>
                </div>
                <div className="col">
                    <p>16-17 ounces</p>
                </div>
            </div>
            <div className="row store-productDetailText">
                <div className="col">
                    <p className="store-productDetailBold">Sun:</p>
                </div>
                <div className="col">
                    <p>Full Sun</p>
                </div>
                <div className="col">
                    <p className="store-productDetailBold">Spread:</p>
                </div>
                <div className="col">
                    <p>4 feet</p>
                </div>
            </div>
            <div className="row store-productDetailText">
                <div className="col">
                    <p className="store-productDetailBold">Height:</p>
                </div>
                <div className="col">
                    <p>6-7 feet</p>
                </div>
                <div className="col">
                    <p className="store-productDetailBold">Sow Method:</p>
                </div>
                <div className="col">
                    <p>Indoor Sow</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default StoreProductDetails;