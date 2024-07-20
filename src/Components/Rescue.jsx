

// import React, { useState, useEffect } from 'react';
// import './Rescue.css';
// import hospitalsData from './nearbyHospitals.json'; // Import hospitals data from JSON file
// import axios from 'axios';

// const Rescue = () => {
//   const [animalName, setAnimalName] = useState('');
//   const [description, setDescription] = useState('');
//   const [photo, setPhoto] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [nearbyHospitals, setNearbyHospitals] = useState([]);
//   const [error, setError] = useState(null);
//   const [currentPlace, setCurrentPlace] = useState('');
//   const [selectedHospital, setSelectedHospital] = useState(null);
//   const [interactionMethod, setInteractionMethod] = useState('');
//   const [registrationData, setRegistrationData] = useState({ animalName: '', description: '' });
//   const [formSubmitted, setFormSubmitted] = useState(false); // New state to track form submission

//   const handleAnimal = (e) => {
//     const { name, value } = e.target;

//     setRegistrationData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // const handleAnimalSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post('http://localhost:8000/rescue', registrationData);
//   //     console.log(response.data);
//   //     setFormSubmitted(true); // Set formSubmitted to true after successful submission
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   const handleAnimalSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const formData = new FormData();
//         formData.append('animalName', registrationData.animalName);
//         formData.append('description', registrationData.description);
//         formData.append('photo', photo); // Append photo to form data
//         // const response = await axios.post('http://localhost:8000/rescue', formData);
//         // const response = await axios.post('http://localhost:8000/rescue', formData);
//         const response = await axios.post('http://localhost:8000/rescue', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//         console.log(response.data);
//         setFormSubmitted(true);
//     } catch (error) {
//         console.log(error);
//     }
// };


//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     setPhoto(file);
//   };

//   const handleCurrentLocation = async () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           setUserLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           });
//           setError(null);
//           await getCurrentPlaceName(position.coords.latitude, position.coords.longitude);
//           await postDataToServer();
//           console.log(position.coords.latitude,  position.coords.longitude);
//         },
//         (error) => {
//           setError("Error getting location: " + error.message);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by this browser.");
//     }
//   };

//   const getCurrentPlaceName = async (latitude, longitude) => {
//     try {
//       const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
//       setCurrentPlace(response.data.display_name);
//     } catch (error) {
//       console.error('Error fetching place name:', error);
//     }
//   };

//   const calculateDistance = (location1, location2) => {
//     const earthRadius = 6371;
//     const lat1 = deg2rad(location1.lat);
//     const lat2 = deg2rad(location2.lat);
//     const lng1 = deg2rad(location1.lng);
//     const lng2 = deg2rad(location2.lng);

//     const dLat = lat2 - lat1;
//     const dLng = lng2 - lng1;

//     const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(lat1) * Math.cos(lat2) *
//       Math.sin(dLng / 2) * Math.sin(dLng / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     const distance = earthRadius * c;
//     return distance;
//   };

//   const deg2rad = (deg) => {
//     return deg * (Math.PI / 180);
//   };

//   const findNearbyHospitals = () => {
//     if (!userLocation) return;
//     const maxDistance = 10;
//     const hospitals = hospitalsData.filter(hospital => {
//       const distance = calculateDistance(userLocation, hospital.location);
//       return distance <= maxDistance;
//     });
//     setNearbyHospitals(hospitals);
//     if (hospitals.length === 0) {
//       setError("No hospitals found within 10 kilometers.");
//     }
//   };

//   useEffect(() => {
//     if (nearbyHospitals.length > 0) {
//       setError(null);
//     }
//   }, [nearbyHospitals]);

//   const handleSelectHospital = (hospital) => {
//     setSelectedHospital(hospital);
//   };

//   const handleInteraction = (method) => {
//     setInteractionMethod(method);

//     switch (method) {
//             case 'Directly call':
//               window.location.href = `tel:${selectedHospital.doctorPhone}`;
//               break;
//             case 'Mail the doc':
//               const emailSubject = 'Emergency: Injured Animal';
//               const emailBody = `Animal Type: ${animalName}\nInjury Description: ${description}\nUser's Current Location: ${currentPlace}`;
//               window.location.href = `mailto:${selectedHospital.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
//               break;
//             case 'WhatsApp doc':
//               const whatsappMessage = `Animal Type: ${animalName}\nInjury Description: ${description}\nUser's Current Location: ${currentPlace}\nPhoto: ${photo ? photo.name : 'Not provided'}`;
//               window.location.href = `https://wa.me/${selectedHospital.doctorPhone}?text=${encodeURIComponent(whatsappMessage)}`;
//               break;
//             case 'Instant message':
//               const smsMessage = `Animal Type: ${animalName}\nInjury Description: ${description}\nUser's Current Location: ${currentPlace}`;
//               window.location.href = `sms:${selectedHospital.doctorPhone}&body=${encodeURIComponent(smsMessage)}`;
//               break;
//             default:
//               break;
//     }
//   };

//   const postDataToServer = async () => {
//     try {
//       const response = await axios.post('/rescued-animals', {
//         animalName,
//         description,
//         photoURL: photo ? photo.name : null,
//         location: userLocation
//       });

//       if (response.status === 200) {
//         console.log('Form data successfully sent to server');
//         // Clear form fields or any other necessary operations
//       } else {
//         console.error('Failed to send form data to server');
//       }
//     } catch (error) {
//       console.error('Error sending form data to server:', error);
//     }
//   };

//   const handleOKClick = () => {
//     setFormSubmitted(true); // Set formSubmitted to true
//   }

//   return (
//     <>
//       <div className='rescuee'>
//         <div className='Text'>
//           <h1>Please Help to Rescue the Injured Animal</h1>
//         </div>
//       </div>
//       <h1 style={{ textAlign: 'center', fontSize: "3rem", fontWeight: "bolder", marginTop: "2vh" }}>EMERGENCY NUMBER :  1962 </h1><br />

//       <div className='Formm'>

//         <div className="Data">

//           <h2><center>Report an Injured Animal</center></h2><br />
//           <form onSubmit={handleAnimalSubmit}>
//             <label>
//               Animal Name:<br />
//               <input type="text" name="animalName" value={registrationData.animalName} onChange={handleAnimal} placeholder='aninmalName' required />
//             </label>
//             <br /><br />
//             <label>
//               Description:<br />
//               <textarea name="description" value={registrationData.description} onChange={handleAnimal} placeholder='description' required></textarea>
//             </label>
//             <br /><br />
//             <label>
//               Upload Photo:<br />
//               <input style={{ marginTop: "1%", padding: "2%", color: "blue", fontSize: "1.1rem", border: "2px dotted black", width: "auto", boxShadow: "1px 2px 1px gray" }} id="myFileInput" type="file" accept="image/*; capture=camera" onChange={handlePhotoChange} />
//             </label>
//             <br /><br />
//             {!formSubmitted && (
//               <button type="submit">OK</button> // Render OK button when form is not submitted
//             )}
//             {!userLocation && formSubmitted && (
//               <button type="button" onClick={handleCurrentLocation}>Get Current Location</button> // Render Enter Current Location button when form is submitted
//             )}
//             <br />
//           </form>
//         </div>
//         <div className='NearHospital'>
//           {error && <p>Error: {error}</p>}
//           {userLocation && currentPlace && (
//             <div>
//               <p style={{ fontSize: "1.5rem", textAlign: "left", fontWeight: "bold" }}><span style={{ fontSize: "1.7rem", textAlign: "left", fontWeight: "bolder", color: "red" }}>Your Current Location:</span><br /> {currentPlace}</p> <br /> <br /><br />

//               {!nearbyHospitals.length > 0 && (
//                 <button className="Find" onClick={findNearbyHospitals}>Find Nearby Hospitals</button>
//               )}
//               {nearbyHospitals.length > 0 && (
//                 <div className='Hospitals'>
//                   <h3>Nearby Hospitals</h3>
//                   <ul>
//                     {nearbyHospitals.map((hospital, index) => (
//                       <li key={index}>
//                         <strong>{hospital.name}</strong><br />
//                         Address: {hospital.address}<br />
//                         Doctor Name: {hospital.doctorName}<br />
//                         Doctor Phone: {hospital.doctorPhone}<br />
//                         Doctor Email: {hospital.email}<br />
//                         Latitude: {hospital.location.lat}, Longitude: {hospital.location.lng}
//                         <br />
//                         <button className="selectHospital" onClick={() => handleSelectHospital(hospital)}>Select Hospital</button><br /><br />
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {/* Render selected hospital details and interaction buttons */}
//       <div className='SelectedHospital1'>
//         {selectedHospital && (
//           <div className="SelectedHospital">
//             <h1 style={{color:"darkred"}}>{selectedHospital.name}</h1><br/>
//             <h3 style={{color:"green"}}>Doctor Name: {selectedHospital.doctorName}</h3>
//             <h3 style={{color:"green"}}>Doctor Phone: {selectedHospital.doctorPhone}</h3><br/>
//             <h2>Contact the Doctor</h2>
//             <button className="ContactcButton" onClick={() => handleInteraction("Directly call")}>Directly call</button>
//             <button className="ContactcButton" onClick={() => handleInteraction("Mail the doc")}>Mail the doc</button>
//             <button className="ContactcButton" onClick={() => handleInteraction("WhatsApp doc")}>WhatsApp doc</button>
//             <button className="ContactcButton" onClick={() => handleInteraction("Instant message")}>Instant message</button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Rescue;







import React, { useState, useEffect } from 'react';
import './Rescue.css';
import hospitalsData from './nearbyHospitals.json'; // Import hospitals data from JSON file
import axios from 'axios';

const Rescue = () => {
  const [animalName, setAnimalName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);
  const [error, setError] = useState(null);
  const [currentPlace, setCurrentPlace] = useState('');
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [interactionMethod, setInteractionMethod] = useState('');
  const [registrationData, setRegistrationData] = useState({ animalName: '', description: '' });
  const [formSubmitted, setFormSubmitted] = useState(false); // New state to track form submission

  const handleAnimal = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAnimalSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('animalName', registrationData.animalName);
      formData.append('description', registrationData.description);
      formData.append('photo', photo); // Append photo to form data

      const response = await axios.post('http://localhost:8000/rescue', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      setFormSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleCurrentLocation = async () => {
    const options = {
      enableHighAccuracy: true,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setError(null);
        await getCurrentPlaceName(position.coords.latitude, position.coords.longitude);
        await postDataToServer();
        console.log(position.coords.latitude,  position.coords.longitude);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          // Wi-Fi positioning using Google Maps Geolocation API
          const geolocation = window.navigator.geolocation;
          if (geolocation) {
            geolocation.getCurrentPosition(
              async (position) => {
                setUserLocation({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                });
                setError(null);
                await getCurrentPlaceName(position.coords.latitude, position.coords.longitude);
                await postDataToServer();
                console.log(position.coords.latitude,  position.coords.longitude);
              },
              (error) => {
                setError("Error getting location: " + error.message);
              },
              options
            );
          } else {
            setError("Geolocation is not supported by this browser.");
          }
        } else {
          setError("Error getting location: " + error.message);
        }
      },
      options
    );
  };

  const getCurrentPlaceName = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
      setCurrentPlace(response.data.display_name);
    } catch (error) {
      console.error('Error fetching place name:', error);
    }
  };

  const calculateDistance = (location1, location2) => {
    const earthRadius = 6371;
    const lat1 = deg2rad(location1.lat);
    const lat2 = deg2rad(location2.lat);
    const lng1 = deg2rad(location1.lng);
    const lng2 = deg2rad(location2.lng);

    const dLat = lat2 - lat1;
    const dLng = lng2 - lng1;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  }

  const findNearbyHospitals = () => {
    if (!userLocation) return;
    const maxDistance = 5;
    const hospitals = hospitalsData.filter(hospital => {
      const distance = calculateDistance(userLocation, hospital.location);
      return distance <= maxDistance;
    });
    setNearbyHospitals(hospitals);
    if (hospitals.length === 0) {
      setError("No hospitals found within 10 kilometers.");
    }
  };

  useEffect(() => {
    if (nearbyHospitals.length > 0) {
      setError(null);
    }
  }, [nearbyHospitals]);

  const handleSelectHospital = (hospital) => {
    setSelectedHospital(hospital);
  };

  const handleInteraction = (method) => {
    setInteractionMethod(method);

    switch (method) {
            case 'Directly call':
              window.location.href = `tel:${selectedHospital.doctorPhone}`;
              break;
            case 'Mail the doc':
              const emailSubject = 'Emergency: Injured Animal';
              const emailBody = `Animal Type: ${animalName}\nInjury Description: ${description}\nUser's Current Location: ${currentPlace}`;
              window.location.href = `mailto:${selectedHospital.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
              break;
            case 'WhatsApp doc':
              const whatsappMessage = `Animal Type: ${animalName}\nInjury Description: ${description}\nUser's Current Location: ${currentPlace}\nPhoto: ${photo ? photo.name : 'Not provided'}`;
              window.location.href = `https://wa.me/${selectedHospital.doctorPhone}?text=${encodeURIComponent(whatsappMessage)}`;
              break;
            case 'Instant message':
              const smsMessage = `Animal Type: ${animalName}\nInjury Description: ${description}\nUser's Current Location: ${currentPlace}`;
              window.location.href = `sms:${selectedHospital.doctorPhone}&body=${encodeURIComponent(smsMessage)}`;
              break;
            default:
              break;
    }
  };

  const postDataToServer = async () => {
    try {
      const response = await axios.post('/rescued-animals', {
        animalName,
        description,
        photoURL: photo ? photo.name : null,
        location: userLocation
      });

      if (response.status === 200) {
        console.log('Form data successfully sent to server');
        // Clear form fields or any other necessary operations
      } else {
        console.error('Failed to send form data to server');
      }
    } catch (error) {
      console.error('Error sending form data to server:', error);
    }
  };

  const handleOKClick = () => {
    setFormSubmitted(true); // Set formSubmitted to true
  }

  return (
    <>
      <div className='rescuee'>
        <div className='Text'>
          <h1>Please Help to Rescue the Injured Animal</h1>
        </div>
      </div>
      <h1 style={{ textAlign: 'center', fontSize: "3rem", fontWeight: "bolder", marginTop: "2vh" }}>EMERGENCY NUMBER :  1962 </h1><br />

      <div className='Formm'>

        <div className="Data">

          <h2><center>Report an Injured Animal</center></h2><br />
          <form onSubmit={handleAnimalSubmit}>
            <label>
              Animal Name:<br />
              <input type="text" name="animalName" value={registrationData.animalName} onChange={handleAnimal} placeholder='aninmalName' required />
            </label>
            <br /><br />
            <label>
              Description:<br />
              <textarea name="description" value={registrationData.description} onChange={handleAnimal} placeholder='description' required></textarea>
            </label>
            <br /><br />
            <label>
              Upload Photo:<br />
              <input style={{ marginTop: "1%", padding: "2%", color: "blue", fontSize: "1.1rem", border: "2px dotted black", width: "auto", boxShadow: "1px 2px 1px gray" }} id="myFileInput" type="file" accept="image/*; capture=camera" onChange={handlePhotoChange} />
            </label>
            <br /><br />
            {!formSubmitted && (
              <button type="submit">OK</button> // Render OK button when form is not submitted
            )}
            {!userLocation && formSubmitted && (
              <button type="button" onClick={handleCurrentLocation}>Get Current Location</button> // Render Enter Current Location button when form is submitted
            )}
            <br />
          </form>
        </div>
        <div className='NearHospital'>
          {error && <p>Error: {error}</p>}
          {userLocation && currentPlace && (
            <div>
              <p style={{ fontSize: "1.5rem", textAlign: "left", fontWeight: "bold" }}><span style={{ fontSize: "1.7rem", textAlign: "left", fontWeight: "bolder", color: "red" }}>Your Current Location:</span><br /> {currentPlace}</p> <br /> <br /><br />

              {!nearbyHospitals.length > 0 && (
                <button className="Find" onClick={findNearbyHospitals}>Find Nearby Hospitals</button>
              )}
              {nearbyHospitals.length > 0 && (
                <div className='Hospitals'>
                  <h3>Nearby Hospitals</h3>
                  <ul>
                    {nearbyHospitals.map((hospital, index) => (
                      <li key={index}>
                        <strong>{hospital.name}</strong><br />
                        Address: {hospital.address}<br />
                        Doctor Name: {hospital.doctorName}<br />
                        Doctor Phone: {hospital.doctorPhone}<br />
                        Doctor Email: {hospital.email}<br />
                        Latitude: {hospital.location.lat}, Longitude: {hospital.location.lng}
                        <br />
                        <button className="selectHospital" onClick={() => handleSelectHospital(hospital)}>Select Hospital</button><br /><br />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Render selected hospital details and interaction buttons */}
      <div className='SelectedHospital1'>
        {selectedHospital && (
          <div className="SelectedHospital">
            <h1 style={{color:"darkred"}}>{selectedHospital.name}</h1><br/>
            <h3 style={{color:"green"}}>Doctor Name: {selectedHospital.doctorName}</h3>
            <h3 style={{color:"green"}}>Doctor Phone: {selectedHospital.doctorPhone}</h3><br/>
            <h2>Contact the Doctor</h2>
            <button className="ContactcButton" onClick={() => handleInteraction("Directly call")}>Directly call</button>
            <button className="ContactcButton" onClick={() => handleInteraction("Mail the doc")}>Mail the doc</button>
            <button className="ContactcButton" onClick={() => handleInteraction("WhatsApp doc")}>WhatsApp doc</button>
            {/* <button className="ContactcButton" onClick={() => handleInteraction("Instant message")}>Instant message</button> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Rescue;
