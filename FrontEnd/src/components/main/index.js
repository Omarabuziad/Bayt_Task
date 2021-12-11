import React from 'react';
import SearchInput from "./SearchInput";
import SectionBox from "./SectionBox";
import LineChart from "./Linechar";
import PieChar from "./PieChar";

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

				<div class="Main_content_Rigth_sentrix">

					<img class="Main_content_Rigth_sentrix_img" src="data:image/png;base64,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" />
                    <p class="Main_content_Rigth_sentrix_p">Store Profile</p>
					<div class="Main_content_Rigth_sentrix_perc">
						<span class="Main_content_Rigth_sentrix_perc_fill"></span>

					</div>
					<p class="Main_content_Rigth_sentrix_link" >Complete Your Profile</p>


				</div>

				<PieChar />






			</div>








		</div>


		
		
		
		
		
		</div>;
};

export default Main;
