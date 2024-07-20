// import React from 'react';
// import "./ContactUs.css";

// function Help() {
//   return (
//     <>
//     {/* part-1 */}
//       <div className="contact-us">  
//  <h1 style={{color:"green"}}>ContactUS</h1>
//       </div>


//       {/* part-2 */}
//       <div className="content-part">
//       <h1 style={{fontSize:"3rem"}}>Get in Touch  with <span style={{color:"green"}}>PAWsitive</span><span style={{color:"#f2692d"}}>Friends</span> Family</h1>

//         <h1>Ask how Can we help you :</h1>
//       </div>
//       {/* part-3 */}

//      <div className="contact-form">
//         <form>
//             <h2>Let's start a conversation</h2>
//             <input type="text" name="name" id="name" placeholder='Your Name' required/>
//             <input type="email" name="email" id="email" placeholder='Email id' required/>
//             <input type="number" name="email" id="email" placeholder='Phone no.' required/>
//            <textarea name="textarea" id="textarea" placeholder='Enter your message' required ></textarea> 
//            <button className='btn' type='submit'>Send</button>
//         </form>
//      </div>

//     </>
//   )
// }

// export default Help;



// import React, { useState } from 'react';
// import './ContactUs.css';

// function Help() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSendEmail = () => {
//     const { name, email, phone, message } = formData;
//     // Check if all fields are filled
//     if (name && email && phone && message) {
//       const mailtoLink = `mailto:animalresc@gmail.com?subject=Help Request&body=Name: ${name}%0DEmail: ${email}%0DPhone: ${phone}%0DMessage: ${message}`;
//       window.location.href = mailtoLink;
//     } else {
//       // Notify the user that all fields are required
//       alert('Please fill in all fields before sending.');
//     }
//   };

//   return (
//     <>
//       <div className="contact-us">  
//         <h1 style={{color:"green"}}>Contact US</h1>
//       </div>

//       <div className="content-part">
//         <h1 style={{fontSize:"3rem"}}>Get in Touch with <span style={{color:"green"}}>PAWsitive</span><span style={{color:"#f2692d"}}>Friends</span> Family</h1>
//         <h1>Ask how Can we help you :</h1>
//       </div>

//       <div className="contact-form">
//         <form>
//           <h2>Let's start a conversation</h2>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Your Name' required/>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email id' required/>
//           <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder='Phone no.' required/>
//           <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Enter your message' required ></textarea> 
//           <button className='btn' type='button' onClick={handleSendEmail}>Send</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Help;


import React, { useState } from 'react';
import './ContactUs.css';

function Help() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const { name, email, phone, message } = formData;
    // Check if all fields are filled
    if (name && email && phone && message) {
      const mailtoLink = `mailto:pawfriends@gmail.com?subject=Help Request&body=Name: ${name}%0DEmail: ${email}%0DPhone: ${phone}%0DMessage: ${message}`;
      window.location.href = mailtoLink;
    } else {
      // Notify the user that all fields are required
      alert('Please fill in all fields before sending.');
    }
  };

  return (
    <>
      <div className="contact-us">  
        <h1 style={{color:"green"}}>Contact US</h1>
      </div>

      <div className="content-part">
        <h1 style={{fontSize:"3rem"}}>Get in Touch with <span style={{color:"green"}}>PAWsitive</span><span style={{color:"#f2692d"}}>Friends</span> Family</h1>
        <h1>Ask how Can we help you :</h1>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSendEmail}>
          <h2>Let's start a conversation</h2>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Your Name' required/>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email id' required/>
          <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder='Phone no.' required/>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Enter your message' required ></textarea> 
          <button className='btn' type='submit'>Send</button>
        </form>
      </div>
    </>
  );
}

export default Help;
