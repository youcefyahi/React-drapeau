import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () =>{
return(
  <div className="navigation">
    <ul>
        <NavLink to="/React-drapeau" className={(nav) =>(nav.isActive ? "nav-active" : "")}><li>Acceuil</li></NavLink>
 
    </ul>
  </div>
)
}

export default Navigation;
 
