import React from "react";
import "./AboutUs.css";
import image from "./sidepic2.jpg";
import image2 from "./help.jpg";
import image3 from "./paw2.png";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      {/* 1 part*/}
      <div className="aboutUs">
        <h1>About Us</h1>
      </div>

      {/* 2 part*/}
      <div className="content">
        {/* 2's 1 */}
        <div className="content-in1">
          <p>
          Far too many animals are abandoned on the road after accidents. Every creature deserves a chance at recovery, and with your help, we can provide the care and love they need. Join us in rescuing animals facing life-threatening situations who require immediate medical attention. Together, we can give them a fighting chance to not just survive, but to thrive.
          </p>
        </div>
        {/* 2's 2 */}
        <div className="content-in2">
        <div className="paw-logo1"><img src={image3} alt="paw2" /></div>
          <div className="our-mission">
            <h3>Our Mission</h3>
            <p>
            "The PAWsitive Friends is dedicated to creating a more compassionate world for animals by empowering communities to take action. We strive to reunite lost pets with their families, connect loving adopters with deserving companions, and streamline animal rescue efforts through innovative technology. By providing an accessible platform for reporting injured animals, locating nearby veterinary care, and fostering collaboration between citizens and animal welfare organizations, we aim to significantly improve animal welfare outcomes. Join us in making a difference, one pawsitive step at a time."
            </p>
          </div>
          <div className="image">
            <img src={image} alt="sidepic2" />
          </div>
        </div>
        {/* 2's 3 */}

        <div className="content-in3">
          <div className="our-history">
            <h3>What We Do? </h3>
            <p>
            Do you see an animal in need? We can help! We connect animals requiring urgent veterinary care with compassionate veterinary professionals who can provide relief.

If you encounter an injured animal or one experiencing a serious medical issue:
•	Call us on dial toll-free number1962: 
•	Alternatively, you can go to our Rescue page with details about the animal's situation, preferable with a clear picture of their current situation.
Our team of dedicated volunteers will be dispatched immediately to help the animal in distress.

            </p>
          <div className="paw-logo"><img src={image3} alt="paw2" /></div>
          </div>
        </div>
      </div>

      {/* 3 part */}

      <div className="rescue-now">
        <div className="image"> 
          <img src={image2} alt="help"/>
        </div>
        
        <Link to="/rescue">
        <button className="btn">Rescue now</button></Link>
        <div className="text">
          <p>
          Numerous animals face abandonment on raods after having met an accident. Every living being deserves cure, care and love, which we promise to provide with a little help from our side. Join hands with us to Rescue animals in life threatening situations, who are in need of immediate medical attention. Let's give their life a fair chance to survive the odds and with a little help rather live and thrive !
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
