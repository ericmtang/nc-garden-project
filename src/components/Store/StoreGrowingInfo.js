import React from 'react';
import './StoreGrowingInfo.css'

const StoreGrowingInfo = () => {
    return(
    <div className="row">
        <div className="col-lg-6">
            <p className="store-growingInfoHead">How to Sow and Plant</p>
            <ul className="store-growingInfoText">
                <li>Sow tomato seeds indoors 6-8 weeks before the last frost in spring using a seed starting kit</li>
                <li>Sow seeds ¼  inch deep in seed-starting formula</li>
                <li>Keep the soil moist at 75 degrees F</li>
            </ul>
            <p className="store-growingInfoHead">Planting in the Garden</p>
            <ul className="store-growingInfoText">
                <li>Select a location in full sun with good rich moist organic soil. Make sure you did not grow tomatoes, peppers, eggplant or potatoes in the bed the previous year to avoid disease problems.</li>
                <li>Prepare the bed by turning the soil under to a depth of 8 inches. Level with a rake to remove clumps of grass and stones.</li>
                <li>Tomatoes should be set 30-48 inches apart in a row with the rows spaced 3-4 feet apart. It can be tempting to space tomatoes more closely at planting time, but if you plant too closely you will increase the chance of disease, and decrease yields.</li>
            </ul>
        </div>
        <div className="col-lg-6">
            <p className="store-growingInfoHead">How to Grow</p>
            <ul className="store-growingInfoText">
                <li>Keep weeds under control during the growing season. Weeds compete with plants for water, space and nutrients, so control them by either cultivating often or use a mulch to prevent their seeds from germinating. </li>
                <li>Mulches also help retain soil moisture and maintain even soil temperatures. This is especially important for tomatoes as their roots may be easily damaged when weeding, and this can lead to blossom end rot.</li>
                <li>Keep plants well-watered during the growing season, especially during dry spells. Plants need about 1-2 inches of rain per week during the growing season. Use a rain gauge to check to see if you need to add water. It's best to water with a drip or trickle system that delivers water at low pressure at the soil level. If you water with overhead sprinklers, water early in the day so the foliage has time to dry off before evening, to minimize disease problems. Keep the soil moist but not saturated.</li>
            </ul>
        </div>
        <div className="row">
            <div className="col">
                <p className="store-growingInfoHead">Harvesting and Preserving Tips</p>
                <ul className="store-growingInfoText">
                    <li>Determinate tomato plants ripen a heavy crop over a few weeks. Indeterminate varieties bear fruit continuously until frost. Remember that the days to harvest refers to the time from setting out transplants in the garden.</li>
                    <li>Pick tomatoes when they are as ripe as possible. They should be fully colored and firm and picked regularly to avoid overloading plants.</li>
                    <li>At the end of the season, when you know there will be a frost, pick all the almost-ripe tomatoes you can, and ripen them in brown bags or spread on newspapers at room temperature. Many cultivars will store for months. Store only sound fruit, at 50-60°F. Do NOT refrigerate and try to avoid having the fruit touch each other.</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default StoreGrowingInfo;