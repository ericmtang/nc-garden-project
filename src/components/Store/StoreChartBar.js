import React from 'react';
import { Progress } from 'reactstrap';

const StoreChartBar = (props) => {

    const fivestarResult =  props.chartBar.filter(data => data.star ==="5 Star");
    const fourstarResult =  props.chartBar.filter(data => data.star ==="4 Star");
    const threestarResult =  props.chartBar.filter(data => data.star ==="3 Star");
    const twostarResult =  props.chartBar.filter(data => data.star ==="2 Star");
    const onestarResult =  props.chartBar.filter(data => data.star ==="1 Star");

    const fivestarLength= fivestarResult.length
    const fourstarLength= fourstarResult.length
    const threestarLength= threestarResult.length
    const twostarLength= twostarResult.length
    const onestarLength= onestarResult.length

    const maxValue = props.chartBar.length

    const starChartPoints = [
        {label: "5 Star", value: fivestarLength},
        {label: "4 Star", value: fourstarLength},
        {label: "3 Star", value: threestarLength},
        {label: "2 Star", value: twostarLength},
        {label: "1 Star", value: onestarLength},
    ]

   
    const chartBar = props.formatBar.map((barData, index) => {
        return(
            <div className="row text-center mb-2">
                <span className="col-2">{barData.star}</span>
                <Progress className="col-8 gx-0" key={barData.id} color={barData.color} value={((starChartPoints[index].value)/maxValue)*100}></Progress>
                <span className="col-2">{starChartPoints[index].value}</span>
            </div>
            
        )
    })

  return (
    <div>
        {chartBar}
    </div>
  );
};

export default StoreChartBar;