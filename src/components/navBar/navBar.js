import React from 'react';
import { Link } from "react-router-dom";
import './navBar.css';

const NavBar = ({activeName}) => {

  return(
    <div className="navBar d-flex">
      <div className="contentNavbar">
        <div className="logo">
          <img 
            src={"/assets/img/NBA-Logo.png"}
            alt="NBA-Logo"
          />
        </div>
        <div className={activeName === "list" ? "activeLink": ""}>
          <Link to="/" >Player List</Link>
        </div>  
        <div  className={activeName === "matches" ? "activeLink": ""}>
          <Link to="/playermatches" >Player Matches</Link>     
        </div>    
      </div>
      <div className="separatorLine" />
    </div>
  )
}

export default NavBar;