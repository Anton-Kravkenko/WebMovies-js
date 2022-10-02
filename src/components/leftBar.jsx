import React from 'react';
import {AiFillHome} from "react-icons/ai";
import {RiUser6Fill} from "react-icons/ri";
import {AiFillSetting} from "react-icons/ai";
import {RiSearchFill} from "react-icons/ri";
import {AiOutlineImport} from "react-icons/ai";
import {AiOutlineExport} from "react-icons/ai";
import {Link} from "react-router-dom";
function leftBar()  {
	return (
		<div className='Main__wraper'>
			<div className='all icons_in_up'>
<Link to={"/"}>	<AiFillHome className='block Left_sitebar_icons'/></Link>
				<Link to={"/AdminPanel"}>		<RiUser6Fill className='block Left_sitebar_icons'/></Link>
				<Link to={"Search"}>	<RiSearchFill className='block Left_sitebar_icons'/></Link>
		
	

			</div>
	<div className='exit'>
			<Link to={"/"}> <AiOutlineImport className='block Left_sitebar_icons last_icons_leftbar'/></Link>
	
		</div>
	</div>
	
	);
};

export default leftBar;
