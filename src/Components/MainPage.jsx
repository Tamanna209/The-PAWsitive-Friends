import React from 'react';
import './MainPage.css';
import Arrow from './arrows-symbol.png';
import   Cow from './Coww.jpeg';
import Dog from './download.jpeg';
import Cat from './download (2).jpeg';
import Arr from "./right-arrow.png";
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className='MAIN'>
      {/* <h1 style={{color:"white"}}>Hello Div</h1> */}
      <div className="mainPage-Div">

      <div className="md1">
        <div className="textt" >
       <h1 id="content"> Numerous animals face abandonment on raods after having met an accident. Every living being deserves cure, care and love, which we promise to provide with a little help from our side. Join hands with us to Rescue animals in life threatening situations, who are in need of immediate medical attention. Let's give their life a fair chance to survive the odds and with a little help rather live and thrive !</h1>
       </div>
       <div className="apply">
       <div className="btn">
       <Link to="/rescue">
        <button > <b>Rescue Now </b></button>      
        </Link>
       </div>
       <div className="arrow">
        <img src={Arrow} alt="arrow" />
       </div>
       </div>
      </div>
     
        {/* <section>
          <div className="curve">
            
          </div>
        </section> */}
        <div className="content1">
          <h1>Become a Part of the <span style={{color:"green"}}>PAWsitive</span><span style={{color:"#f2692d"}}>Friends</span> Family</h1>
    
   <section>
        <div className="section1">
         <img src={Cow} alt="cow" />
         <h4 style={{marginTop:"30px" , color:"green"}}> RESCUE COW</h4>
         <p style={{fontSize:"1.4rem" , textAlign:"center" , marginTop:"20px" , marginBottom:"30px"}}> This section draws attention to the plight of rescued cows, promoting compassion and support for their welfare.</p>
    
         <div className="divAA">
          <div className="divAAA">
          <Link to="/rescue"><a href="">Rescue</a></Link>
        </div>
        
        </div>
        
        </div>
        <div className="section2">
          <img src={Dog} alt="Dog" />
          <h4 style={{marginTop:"10%" , color:"green" }}>RESCUE DOG</h4>
         <p style={{fontSize:"1.4rem" , textAlign:"center" , marginTop:"6%" , marginBottom:"30px"}} >This section draws attention to the plight of rescued dogs, promoting compassion and support for their welfare. </p>
         <div className="divAB">
          <div className="divAAA">
          <Link to="/rescue"><a href="">Rescue </a></Link>
        </div>
         
        </div>
        </div>
        <div className="section3">
          <img src={Cat}  alt="Cat" />
          <h4 style={{marginTop:"30px", color:"green"}}>RESCUE CAT OR OTHERS</h4>
          <p style={{fontSize:"1.4rem" , textAlign:"justify" , marginTop:"20px" , marginBottom:"30px"}}>This section draws attention to the plight of rescued cats or other animals, promoting compassion and support for their welfare. </p>
          <div className="divAC">
          <div className="divAAA">
          <Link to="/rescue"><a href="">Rescue </a></Link>
        </div>
         
        </div>

       
        </div>
        
        </section>
        
        </div>
      



        </div>
       </div>
   
    
  )
}

export default MainPage;

// import React from 'react';
// import './MainPage.css';
// import Arrow from './arrows-symbol.png';
// import   Cow from './Coww.jpeg';
// import Dog from './download.jpeg';
// import Cat from './download (2).jpeg';
// import Arr from "./right-arrow.png";
// import {NavLink} from "react-router-dom";

// function MainPage() {
//   return (
//     <div className='MAIN'>
//       {/* <h1 style={{color:"white"}}>Hello Div</h1> */}
//       <div className="mainPage-Div">

//       <div className="md1">
//         <div className="textt" >
//        <h1 id="content"> Numerous animals face abandonment on raods after having met an accident. Every living being deserves cure, care and love, which we promise to provide with a little help from our side. Join hands with us to Rescue animals in life threatening situations, who are in need of immediate medical attention. Let's give their life a fair chance to survive the odds and with a little help rather live and thrive !</h1>
//        </div>
//        <NavLink to="/Rescue"><div className="apply">
//        <div className="btn">
//         <button><NavLink to="/Rescue"> <b style={{color:"white"}}>Rescue Now</b></NavLink></button>
//         <div className="arrow">
//           <NavLink to="/Rescue"><img src={Arrow} alt="arrow" /></NavLink>
//        </div>
//        </div>
//        {/* <div className="arrow">
//         <img src={Arrow} alt="arrow" />
//        </div> */}
//        </div></NavLink>
//       </div>
     
//         {/* <section>
//           <div className="curve">
            
//           </div>
//         </section> */}
//         <div className="content1">
//           <h1>Become a Part of the <span style={{color:"green"}}>PAWsitive</span><span style={{color:"#f2692d"}}>Friends</span> Family</h1>
    
//    <section className="section">
//         <div className="section1">
//          <img src={Cow} alt="cow" />
//          <div className="divAA">
//           <div className="divAAA">
//        <NavLink to ="/Rescue"><a href="">Rescue</a></NavLink>
//         </div>
//         <div className="arro">
//         <img src={Arr} alt="arrow" /> 
//         </div> 
//         </div>
//          <h4 style={{marginTop:"30px"}}> RESCUE COW</h4>
//          <p style={{fontSize:"17px" , textAlign:"justify" , marginTop:"20px" , marginBottom:"30px"}}> This section draws attention to the plight of rescued cows, promoting compassion and support for their welfare.</p>
//          {/* <div className="resc">
//          <a href="" className='Rescue'>Rescue a Cow</a>
//         <img src={Arr} alt="arrow" />
//          </div> */}
        
//         </div>
//         <div className="section2">
//           <img src={Dog} alt="Dog" />
//           <div className="divAB">
//           <div className="divAAA">
// <NavLink to="/Rescue"><a href="">Rescue </a></NavLink>
//         </div>
//         <div className="arro">
//         <img src={Arr} alt="arrow" /> 
//         </div> 
//         </div>
//           <h4 style={{marginTop:"30px"}}>RESCUE DOG</h4>
//          <p style={{fontSize:"17px" , textAlign:"justify" , marginTop:"20px" , marginBottom:"30px"}} >This section draws attention to the plight of rescued dogs, promoting compassion and support for their welfare. </p>
//          {/* <div className="resc">
//          <a href="" className='Rescue'>Rescue a Cow</a>
//         <img src={Arr} alt="arrow" />
//          </div> */}
//         </div>
//         <div className="section3">
//           <img src={Cat}  alt="Cat" />
//           <div className="divAC">
//           <div className="divAAA">
//         <NavLink to="/Rescue"><a href="">Rescue </a></NavLink>
//         </div>
//         <div className="arro">
//         <img src={Arr} alt="arrow" /> 
//         </div> 
//         </div>
//           <h4 style={{marginTop:"30px"}}>RESCUE CAT OR OTHERS</h4>
//           <p style={{fontSize:"17px" , textAlign:"justify" , marginTop:"20px" , marginBottom:"30px"}}>This section draws attention to the plight of rescued cats or other animals, promoting compassion and support for their welfare. </p>

//           {/* <div className="resc">
//          <a href="" className='Rescue'>Rescue a Cow</a>
//         <img src={Arr} alt="arrow" />
//          </div> */}
//         </div>
//         </section>
//         </div>
      




//          {/* <div className="div-A">
          
//         <div className="divAA">
//           <div className="divAAA">
//         <a href="">Rescue</a>
//         </div>
//         <div className="arro">
//         <img src={Arr} alt="arrow" /> 
//         </div> 
//         </div>
       

        
//         <div className="divAB">
//           <div className="divAAA">
//         <a href="">Rescue </a>
//         </div>
//         <div className="arro">
//         <img src={Arr} alt="arrow" /> 
//         </div> 
//         </div>
        
      
//         <div className="divAC">
//           <div className="divAAA">
//         <a href="">Rescue </a>
//         </div>
//         <div className="arro">
//         <img src={Arr} alt="arrow" /> 
//         </div> 
//         </div>
//         </div> */}



//         </div>
//        </div>
   
    
//   )
// }

// export default MainPage;
