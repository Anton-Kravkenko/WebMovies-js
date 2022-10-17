import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiUser6Fill } from "react-icons/ri";
import { RiSearchFill } from "react-icons/ri";
import { AiOutlineImport } from "react-icons/ai";
import { AiOutlineExport } from "react-icons/ai";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";

function LeftBar() {
  let navigate = useNavigate();
  const auth = getAuth();
  const User = auth.currentUser;

  const Logout = () => {
    signOut(auth)
      .then(() => {
        return navigate("/Main");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="Main__wraper">
      <div className="all icons_in_up">
        <NavLink activeClassName="is-active" to={"Main"}>
          <AiFillHome className="block Left_sitebar_icons" />
        </NavLink>
        <NavLink activeClassName="is-active" to={"Search"}>
          <RiSearchFill className="block Left_sitebar_icons" />
        </NavLink>
          <NavLink activeClassName="is-active" to={"/Favorites"}>
            <BsBookmarkHeartFill className="block Left_sitebar_icons" />
          </NavLink>
        {User && (
          <NavLink activeClassName="is-active" to={"AdminPanel"}>
            <RiUser6Fill className="block Left_sitebar_icons" />
          </NavLink>
        ) || null }
      </div>
      <div className="exit">
        {(User && (
          <AiOutlineImport
            onClick={Logout}
            className="block Left_sitebar_icons last_icons_leftbar"
          />
        )) || (
          <NavLink activeClassName="is-active" to={"Login"}>
            <AiOutlineExport className="block Left_sitebar_icons last_icons_leftbar" />
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default LeftBar;
