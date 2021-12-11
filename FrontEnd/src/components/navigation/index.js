import React from 'react';
import "./navigation.css";
import {IoIosArrowDown} from "react-icons/io";
import {IoIosNotifications} from "react-icons/io";
import {IoMdHelpCircle} from "react-icons/io";
import {BsFillGrid3X3GapFill} from "react-icons/bs";




const Navigation = () => {
	return <div className="navigation">

		<div class="navigation_title">
			<h2 class="navigation_title_h2">RepairDesk<IoIosArrowDown class="navigation_title_h2_icon"></IoIosArrowDown></h2>
		</div>

		<ul class="navigation_list">
			<li>Repairs<IoIosArrowDown class="navigation_list_icon"></IoIosArrowDown></li>
			<li>inventory<IoIosArrowDown class="navigation_list_icon"></IoIosArrowDown></li>
			<li>Customer<IoIosArrowDown class="navigation_list_icon"></IoIosArrowDown></li>
			<li>Point of Sale</li>
			<li>Reports</li>
			<li>Campaigner</li>
			<li>Expense</li>
		</ul>

		<div className="navigation_account">

            <BsFillGrid3X3GapFill class="navigation_account_icon"></BsFillGrid3X3GapFill>
			<IoMdHelpCircle class="navigation_account_icon"></IoMdHelpCircle>
			<IoIosNotifications class="navigation_account_icon"></IoIosNotifications>
			
			<img class="navigation_account_img" src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg" alt="Profile" />
			


		</div>
		
		
		
		
		
		
		</div>;
};

export default Navigation;
