import React,{useContext} from "react";

import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/Authentication";

import "../../styles/Navlinks.css";

const NavLinks:React.FC = () => {
    const {logout} = useContext(AuthContext)

    return (
        <ul className="nav-links">
            <li onClick={logout}>
                <NavLink to='/'>
                    Logout
                </NavLink>

            </li>
        </ul>
    );
};

export default NavLinks;