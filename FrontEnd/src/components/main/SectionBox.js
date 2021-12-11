import React from 'react';
import "./main.css";


const SectionBox = ({title}) => {

	return <div className="section_box">
        <div className="section_box_up">
        <p className="section_box_up_title">{title}<strong>(10)</strong></p>
        <hr className="section_box_up_hr"></hr>
        <p className="section_box_up_price"><strong>$</strong>7851.89</p>
        </div>

        <span className="section_box_down">
            <p>(25%)</p>
            <p>(5000$)</p>
        </span>
		

		
		
		</div>;
};

export default SectionBox;
