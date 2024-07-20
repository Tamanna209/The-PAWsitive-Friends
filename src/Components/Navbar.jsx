import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import Logo from './Log.png';
import { GiHamburgerMenu } from "react-icons/gi";
// import Account from './account-icon.png';
import volunteer from './volunteer.png'

function Navbar(){
  const [show,setShow]=useState(true)
  const openmenu=()=>{
    setShow((prev)=>!prev)
  }

    return(
        <>
        <div className="OuterDiv">
        <div className="main-div">
       <div className="div1">
        <h1><span style={{color:"green"}}>PAWsitive</span ><span style={{color:"#f2692d"}}>Friends</span></h1>
       </div>
       <div className="Logo">
       <img src={Logo} alt="logo" />
       </div>
       <div className={show?"MainDiv2":"showMenu"}>
       <div className="div2">
        
        <nav>
          <ul >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/AboutUs">About</NavLink></li>
            <li><NavLink to="/Rescue">Rescue</NavLink></li>
            <li><NavLink to="/Help">Help</NavLink></li>
            <li className="volunteer"><NavLink to="/Volunteer"><img src={volunteer} alt='account'/></NavLink></li>
          </ul>
        </nav>
       </div>
       {/* <div className="account">
        <img src={volunteer} alt='account' />
       </div> */}
       </div>
       <GiHamburgerMenu className="ham-icon" onClick={openmenu}/>
       
       {/* <h3 style={{color:"white"}}>HELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLOOOOOOOOOOOOOOOOOOO</h3> */}
       </div>
       </div>
        </>
    )
}
export default Navbar;
