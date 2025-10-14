import { useState } from "react";
import {LOGO_URL} from "../utils/constants";

const Header=() =>{

  const[reactBtn,setReactBtn] = useState("login")
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
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