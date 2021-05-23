import React from "react";
import storeFrontData from '../../shared/storeFrontData';
import storeCardData from '../../shared/storeCardData';
import StoreCard from './StoreCard';
import './Store.css';

const Store = () => {
  
  const mapData = storeFrontData.map(storeFront => { 
    return(<div className="mt-2">{storeFront.name}</div>)
  })

  
  return (
    <div className="container">
      <div className="row">

        {/* Search Bar Below */}
        <div className="col-lg-3">
          <p>NARROW YOUR SEARCH</p>
          {mapData}
        </div>

        {/* Card Section Below */}
        <div className="col">
          <h1>Vegetable Seeds and Plants</h1>
          <span>NOTHING COMPARES TO HOME GROWN</span>
          <p>Shop and grow vegetable seeds and plants perfect for your home garden. Prize winning tomatoes, peppers, beans and heirloom vegetables from Burpee.com.</p>
          <div className="row">
            <StoreCard></StoreCard>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Store;
