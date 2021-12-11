import React from 'react';
import "./main.css";


const PercDet = ({title , color , perc}) => {

	return <div className="pieChart_container_details_facebook">
    <div className="pieChart_container_details_facebook_title">
      <span className="pieChart_container_details_facebook_title_box" style={{backgroundColor:color}}></span>
      <p className="pieChart_container_details_facebook_title_p">{title}</p>
    </div>
    <div className="pieChart_container_details_facebook_perc" style={{backgroundColor:color , width : `${perc}%`}}>
    </div>
    <p>{perc}%</p>
  </div>
};

export default PercDet;
