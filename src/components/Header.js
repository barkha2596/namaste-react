import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=() =>{

  const[reactBtn,setReactBtn] = useState("login")

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus)
  return(
    
    
    //<div className="header">
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL}/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">onlineStatus: {onlineStatus? "✅" : "🔴" }</li>
          <li className="px-4"><Link to ="/">Home</Link></li>
          <li className="px-4"><Link to = "/about">About Us</Link></li>
          <li className="px-4"><Link to = "/contact">Contact</Link></li>
          <li className="px-4"><Link to = "/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button className="login" onClick={() =>{
            reactBtn==="login"? setReactBtn("logout") : setReactBtn("login")
          }}>{reactBtn}</button>
        </ul>
      </div>

    </div>
  )
}

export default Header;