import React, {useState} from 'react';
import StoreCarousel from './StoreCarousel';
import { Button, Input} from 'reactstrap';
import StorePopover from './StorePopover';
import StoreCollapse from './StoreCollapse';
import StoreVideoModal from './StoreVideoModal';
import StoreGrowingInfo from './StoreGrowingInfo';
import StoreProductDetails from './StoreProductDetails';
import StoreGrowingCalendar from './StoreGrowingCalendar';
import './StoreDetail.css'

const StoreDetail = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <StoreCarousel></StoreCarousel>
                    <div className="col store-detailVideoBackground">
                        <p className="mt-4 store-detailVideoText">Video</p>
                    </div>
                    <div className="row mt-3">
                        <img className="col-5" src="https://img.youtube.com/vi/6qfI9giCAJY/mqdefault.jpg" onClick={toggle}></img>
                        <p className="col store-detailTextColor">Garden Basic 101
                            <p className="store-detailTextColor">Learn how to grow a beautiful garden at home!</p>
                        </p>
                    </div>
                    <div>
                        
                        <StoreVideoModal modal={modal} toggle={toggle}></StoreVideoModal>
                    </div>
                    
                    
                </div>
                <div className="col">
                    <h2 className="store-detailFontColor">Cauliflower, White Corona Hybrid</h2>
                    <div className="col">
                        <p className="store-detailTextColor">The fastest—and whitest—cauliflower you’ll ever see. In spring, in just 33 days after transplanting, ‘White Corona’s compact 12–14" plants are busy producing flavor-packed, sun-bright heads; a luminous cauliflower crown. A perfect fit for patios and smaller gardens. Prime for staggered plantings during cooler months.</p>
                        <div className="store-detailBackground row">
                            <div className="col-4">
                                <p className="store-detailAlign">Item #</p>
                            </div>
                            <div className="col-4">
                                <p className="store-detailAlign">Quantity</p>
                            </div>
                            <div className="col-4">
                                <p className="store-detailAlign">Price</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <p className="store-detailTextColor"> Item#:54350A 1 Pkt. (25 seeds)</p>
                            </div>
                            <div className="col-4">
                                <Input className="w-50" value="1"></Input>
                            </div>
                            <div className="col-4">
                                <p className="store-detailTextColor">$6.95</p>
                            </div>
                        </div>
                        <div className="row">
                            <a className="col">Add to Wish List</a>
                            <div className="col">
                                <Button size="lg" className="modal-float-right" color="primary">Add To Cart</Button>
                            </div>
                            <hr />
                        </div>
                        
                        <div className="row">
                            <div className="col-4">
                                <span className="store-detailTextSize">Fruit Size  <StorePopover color="#93897d" inside="i" target="fruitSize" info="The average size of the fruit produced by this product." /></span>
                                <p className="store-detailTextColor">5 inches</p>
                            </div>
                            <div className="col-4">
                                <span className="store-detailTextSize">Sun <StorePopover color="#93897d" inside="i" target="sun" info="The amount of sunlight this product needs daily in order to perform well in the garden. Full sun means 6 hours of direct sun per day; partial sun means 2-4 hours of direct sun per day; shade means little or no direct sun." /></span>
                                <p className="store-detailTextColor">Full Sun</p>
                            </div>
                            <div className="col-4">
                                <span className="store-detailTextSize">Height <StorePopover color="#93897d" inside="i" target="height" info="The typical height of this product at maturity." /></span>
                                <p className="store-detailTextColor">12-14 inches</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <span className="store-detailTextSize">Days To Maturity <StorePopover color="#93897d" inside="i" target="daysToMaturity" info="The average number of days from when the plant is actively growing in the garden to the expected time of harvest." /></span>
                                <p className="store-detailTextColor">30-33 days</p>
                            </div>
                            <div className="col-4">
                                <span className="store-detailTextSize">Spread <StorePopover color="#93897d" inside="i" target="spread" info="The average number of days from when the plant is actively growing in the garden to the expected time of harvest." /></span>
                                <p className="store-detailTextColor">12-14 inches</p>
                            </div>
                            <div className="col-4">
                                <span className="store-detailTextSize">Sow Method <StorePopover color="#93897d" inside="i" target="sowMethod" info="This refers to whether the seed should be sown early indoors and the seedlings transplanted outside later, or if the seed should be sown directly in the garden at the recommended planting time." /></span>
                                <p className="store-detailTextColor">Direct Sow/Indoor Sow</p>
                            </div>
                            <hr></hr>
                        </div>
                        
                        <div className="row mt-1">
                            <StoreCollapse id="toggle1" title="Growing Calendar for Grow (10)" body={<StoreGrowingCalendar />} lastFrost="Average Last Frost: 01/15-02/15" firstFrost="Average First Frost: 12/10-01/15"></StoreCollapse>
                            <StoreCollapse id="toggle2" title="Growing Information" body={<StoreGrowingInfo></StoreGrowingInfo>}></StoreCollapse>
                            <StoreCollapse id="toggle3" title="Product Details" body={<StoreProductDetails />} ></StoreCollapse>
                            <StoreCollapse id="toggle4" title="Reviews" body="Hello this is in the body! # 4" ></StoreCollapse>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}
 
export default StoreDetail;