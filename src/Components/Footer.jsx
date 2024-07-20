import React from 'react';
import Logo from './Log.png';
import './Footer.css'
import Facebook from './facebook.png';
import Twitter from './twitter(1).png';
import Insta from './instagram(1).png';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
      
    <div className="b-Logo">

</div>
  
     <div className="loggo">

         <div className="logo1">
         <Link to="/AboutUs">About US</Link>
         <Link to="/Rescue">Rescue</Link>
         </div>

          <div className="logo1">
          <Link to="/Help">Volunteer</Link>
          <Link to="/Help">Help</Link>
          </div>
         
     </div>
   <div className="footer">
      <div className='footer1'>
        <div className="logoText">
         <img src={Logo} alt="logo" /><br />
        <span style={{color:"green" , marginLeft:"20px"}}>PAWsitive</span><span style={{color:"#f2692d"}}>Friends</span> 
        <p>Be a Part of  our Family</p>
        </div>

        
            <div className='details1'>
                <p className='para1'>Download</p>
                <div className='para2'>
                <p>Web Application</p><br />
                </div>
                 <p className='para1'>Services</p>
                 <div className='para2'>
                 <p>Design</p>
                 <p>Development</p>
                 </div>
                
            </div>
            <div className='details2'>
                <p className='para1'>Products</p>
                <div className='para2'>
                <p>Web</p><br />
                 </div>

                 <p className='para1'>Company</p>
                 <div className='para2'>
                 <p>Terms & Conditions</p>
                 <p>Privacy Policy</p>
                 </div>
            </div>

            <div className='details3'>
                <div className='getTouch'>
                <p className='para1'>Get in touch</p>
              

            <div className='Social'>
                <div className='social1'>
                    <img src={Facebook}  alt="facebbook" />
                </div>
                <div className='social1'>
                    <img src={Twitter} alt="twitter" />
                </div>
                <div className='social1'>
                    <img src={Insta} alt="instagram" />
                </div>
            </div>
            </div>
            <div className='registerr'>
            <Link to="/help">
                <button type='button'>Help</button> </Link>
            </div>
            </div>
       
      </div>
      <div className='copyright'>
      <p> &copy; 2024 The PAWsitive Friends, All Rights Reserved.</p>
      </div>
   </div>
    </div>
  )
}

export default Footer;

