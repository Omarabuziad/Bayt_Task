import React from 'react';
import "./main.css";
import {FiSearch} from "react-icons/fi";

const SearchInput = ({title}) => {

	return <div className="search_input_container">
		

			<h4>{title}</h4>

            <span className="search_input_span">
                <input className="search_input_span_input"   placeholder='Search'  />
                <FiSearch className="search_input_span_icon"></FiSearch>

            </span>


	


		
		
		
		
		
		</div>;
};

export default SearchInput;
