import React from 'react';
import StoreTooltip from './StoreTooltip';
import './StoreGrowingCalendar.css'

const StoreGrowingCalendar = () => {
    return(
        <div className="row">
            <div className="col-lg-4 col-6 store-GrowingFontSize">
                {/* <span className="store-GrowingIndoor">Start Indoors</span> */}
                <StoreTooltip bgColor="#93B6B8" color="store-GrowingIndoor" id="indoors" title="Start Indoors" info="Starting seeds indoors is called Indoor Sow or Indirect Sow and these dates are when to sow seeds indoors in the spring or summer"></StoreTooltip>
                <p>  01/04 - 01-18</p>
            </div>
            <div className="col-lg-4 col-6 store-GrowingFontSize ">
                {/* <span className="store-GrowingTransplant">Transplant</span> */}
                <StoreTooltip bgColor="#0C4A6D" color="store-GrowingTransplant" id="transplant" title="Transplant" info="When to transplant bulbs or roots in the garden for spring"></StoreTooltip>
                <p>  01/04 - 01-18</p>
            </div>
            <div className="col-lg-4 col-6 store-GrowingFontSize ">
                {/* <span className="store-GrowingOutdoors">Start OutDoors</span> */}
                <StoreTooltip bgColor="#34935F" color="store-GrowingOutdoors" id="outdoors" title="Start OutDoors" info="Starting seeds outdoors is called Outdoor Sow or Direct Sow and these dates are when to sow seeds outdoors in the spring or summer"></StoreTooltip>
                <p>  01/04 - 01-18</p>
            </div>
            <div className="col-lg-4 col-6 store-GrowingFontSize ">
                {/* <span className="store-GrowingIndoorFall">Start Indoors Fall</span> */}
                <StoreTooltip bgColor="#EA791C" color="store-GrowingIndoorFall" id="indoorsFall" title="Start Indoors Fall" info="Starting seeds indoors in the fall called Indoor Sow or Indirect Sow and these dates are when to sow seeds outdoors in the fall"></StoreTooltip>
                <p>  01/04 - 01-18</p>
            </div>
            <div className="col-lg-4 col-6 store-GrowingFontSize ">
                {/* <span className="store-GrowingTransplantFall">Transplant Fall</span> */}
                <StoreTooltip bgColor="#25989E" color="store-GrowingTransplantFall" id="transplantFall" title="Transplant Fall" info="Transplant Fall-When to transplant bulbs or roots in the garden for fall"></StoreTooltip>
                <p>  01/04 - 01-18</p>
            </div>
            <div className="col-lg-4 col-6 store-GrowingFontSize ">
                {/* <span className="store-GrowingOutdoorFall">Start Outdoors Fall</span> */}
                <StoreTooltip bgColor="#F9A716" color="store-GrowingOutdoorFall" id="outdoorFall" title="Start Outdoors Fall" info="Starting seeds outdoors in the fall is called Outdoor Sow or Direct Sow and these dates are when to sow seeds outdoors in the fall"></StoreTooltip>
                <p>  01/04 - 01-18</p>
            </div>
            
        </div>
    )
}

export default StoreGrowingCalendar