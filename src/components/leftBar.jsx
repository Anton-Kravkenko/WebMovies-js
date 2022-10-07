import React from 'react';
import {AiFillHome} from "react-icons/ai";
import {RiUser6Fill} from "react-icons/ri";
import {AiFillSetting} from "react-icons/ai";
import {RiSearchFill} from "react-icons/ri";
import {AiOutlineImport} from "react-icons/ai";
import {AiOutlineExport} from "react-icons/ai";
import {BsBookmarkHeartFill} from "react-icons/bs";
import { getAuth } from "firebase/auth";
import { Link, Navigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function LeftBar()  {
let navigate = useNavigate();
const auth = getAuth();
const User = auth.currentUser;

const Logout = () => {
signOut(auth).then(() => {
return navigate("/")
}).catch((error) => {
 console.log(error)
});
}
	return (
		<div className='Main__wraper'>
			<div className='all icons_in_up'>
<Link to={"/"}>	<AiFillHome className='block Left_sitebar_icons'/></Link>
				{User && <Link to={"/AdminPanel"}>		<RiUser6Fill className='block Left_sitebar_icons'/></Link>}
				<Link to={"Search"}>	<RiSearchFill className='block Left_sitebar_icons'/></Link>
				{User && 	<Link to={"Favorites"}>	<BsBookmarkHeartFill className='block Left_sitebar_icons'/></Link>}
	

			</div>
	<div className='exit'>
		
		{User &&  < AiOutlineImport onClick={Logout} className='block Left_sitebar_icons last_icons_leftbar'/> ||	<Link to={"Login"}> <AiOutlineExport className='block Left_sitebar_icons last_icons_leftbar'/></Link>}
		</div>
	</div>
	
	);
};

export default LeftBar;
