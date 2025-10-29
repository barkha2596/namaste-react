import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";

const Header=() =>{

  const[reactBtn,setReactBtn] = useState("login")
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to = "/about">About Us</Link></li>
          <li><Link to = "/contact">Contact</Link></li>
          <li>Cart</li>
          <button className="login" onClick={() =>{
            reactBtn==="login"? setReactBtn("logout") : setReactBtn("login")
          }}>{reactBtn}</button>
        </ul>
      </div>

    </div>
  )
}

export default Header;