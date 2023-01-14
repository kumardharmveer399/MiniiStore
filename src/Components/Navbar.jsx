import React, { useState } from "react";
import logo2 from "../img/logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOutdent,faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from "react-router-dom";


const Nav = ()=>
{

  const [ShowMediaIcons,setShowMediaIcons] =useState(false);
  const handleClick = (event) =>{
    setShowMediaIcons (current => !current);
  }

  return(
   <>
     <div id="header">
        <img src={logo2} class="logo"  alt=""/>
        <div>
          <ul id="navbar" className={ShowMediaIcons ? 'active' : ''}>
              <li><NavLink  activeClassName to="/">Home</NavLink></li>
              <li><NavLink activeClassName="active" to="/Shope">Shop</NavLink></li>
              <li><NavLink activeClassName to="/Blog">Blog</NavLink></li>
              <li><NavLink  to="/About">About</NavLink></li>
              <li><NavLink to="/Contact">Contact</NavLink></li>
             
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
        <FontAwesomeIcon icon={faShoppingBag} />
        <FontAwesomeIcon icon={faOutdent} />

        </div>
    </div>
   </>
  )
}


export default Nav;