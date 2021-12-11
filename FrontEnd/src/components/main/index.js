import React from 'react';
import SearchInput from "./SearchInput";
import SectionBox from "./SectionBox";
import LineChart from "./Linechar";
import "./main.css";


const Main = () => {
	return <div className="Main">

		<div class="Main_Welcome">

			<h2>Welcome Tim Collins!</h2>
			<div class="Main_Welcome_rigth">
			<SearchInput title="Customer" />
			<SearchInput title="Invoice #"/>
			<SearchInput title="Ticket #"/>
			<SearchInput title="Customer"/>
			</div>

		</div>

		<div class="Main_content">

			<div class="Main_content_left">

				<div class="Main_content_left_salesRate">

					<SectionBox title="Repairs" />
					<SectionBox title="Network Unlocks"/>
					<SectionBox title="Accessories & Parts"/>
					<SectionBox title="Trad In"/>







				</div>


               
				<LineChart />







			</div>

			<div class="Main_content_Rigth">






			</div>








		</div>


		
		
		
		
		
		</div>;
};

export default Main;
