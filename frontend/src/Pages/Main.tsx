import React from "react";
import './Main.css'
import { NavLink } from "react-router-dom";



function Main() {
  return (
    <div className="fixed-header">
    <nav className="navbar">
      <NavLink id="login" to="/userlogin">
        userlogin
      </NavLink>
      <NavLink id='signup' to="/usersignup">
       Signup
      </NavLink>
      <NavLink id="adminlogin" to="/adminlogin">
        adminlogin
      </NavLink>
    </nav>

    </div>
    
  );
}
export default Main;