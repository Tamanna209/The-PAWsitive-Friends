import React from 'react';
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
    {/* part-1 */}
      <div className="contact-us">  
 <h1>ContactUS</h1>
      </div>


      {/* part-2 */}
      <div className="content-part">
        <h1>Get in touch with pawsitive</h1>
        <p>Ask how Can we help you :</p>
      </div>
      {/* part-3 */}

     <div className="contact-form">
        <form>
            <h3>Let's start a conversation</h3>
            <input type="text" name="name" id="name" placeholder='Your Name' required/>
            <input type="email" name="email" id="email" placeholder='Email id' required/>
            <input type="number" name="email" id="email" placeholder='Phone no.' required/>
           <textarea name="textarea" id="textarea" placeholder='Enter your message' required ></textarea> 
           <button className='btn' type='submit'>Send</button>
        </form>
     </div>

    </>
  )
}

export default ContactUs
