// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function Volunteer() {
// //   const [animals, setAnimals] = useState([]);

// //   useEffect(() => {
// //     // Fetch animal data from the server when the component mounts
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8000/animals');
// //         setAnimals(response.data);
// //       } catch (error) {
// //         console.error('Error fetching animals:', error);
// //       }
// //     };

// //     fetchData();

// //     // Clean up function to cancel any ongoing requests
// //     return () => {
// //       // Cleanup code if needed
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Animal Details</h2>
// //       <div>
// //         {animals.map(animal => (
// //           <div key={animal._id}>
// //             <h3>{animal.animalname}</h3>
// //             <p>{animal.desc}</p>
// //             {/* Render other animal details as needed */}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Volunteer;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Volunteer.css';
// // import volun from  './volun2.jpeg';
// import adopt from './Adopt1.png';
// import donate from './Donate1.png';

// function Volunteer() {
//   const [animals, setAnimals] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/animals');
//         setAnimals(response.data);
//       } catch (error) {
//         console.error('Error fetching animals:', error);
//       }
//     };

//     fetchData();

//     return () => {
//       // Clean up function if needed
//     };
//   }, []);

//   return (
// <>
//      <div className='main'>
//     <div className='volunn'> 
//     <h1> <center>THANKS TO THE VOLUNTEERS TO <span style={{color:"white"}}>Become a Part of the</span> <span style={{color:"green"}}>PAWsitive</span><span style={{color:"#f2692d"}}>Friends</span> Family </center></h1>
//      </div>
     
//     <div className="volunteer-container">
//       <h1 className="animal-heading"> Rescued Animal in Past by Volunteers</h1>
//       <div className="animal-details">
//         {animals.map(animal => (
//           <div key={animal._id} className="animal-card">
//             <h3 className="animal-name">{animal.animalname}</h3>
//             <p className="animal-description">{animal.desc}</p>
//             {/* Render other animal details as needed */}
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//     <div className='future'>
//       <div className='imgg'>
//         <div className='adopt'><img src={adopt} alt="adopt" /></div>
//         <div className='txt'><h1>YOU CAN GIVE AND ADOPT THE ANIMALS FROM PAW Friends!!! SOON ...</h1></div>
//         <div className='donate'><img src={donate} alt="donatec" /></div>
      
      
//        </div>
     
//     </div>
//     </>
//   );
// }

// export default Volunteer;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Volunteer.css';
import adopt from './Adopt1.png';
import donate from './Donate1.png';

function Volunteer() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/animals');
        setAnimals(response.data);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };

    fetchData();

    return () => {
      // Clean up function if needed
    };
  }, []);

  return (
    <>
      <div className='main'>
        <div className='volunn'>
          <h1> <center>THANKS TO THE VOLUNTEERS TO <span style={{ color: "white" }}>Become a Part of the</span> <span style={{ color: "green" }}>PAWsitive</span><span style={{ color: "#f2692d" }}>Friends</span> Family </center></h1>
        </div>

        <div className="volunteer-container">
          <h1 className="animal-heading"> Rescued Animals in Past by Volunteers</h1>
          <div className="animal-details">
            {animals.map(animal => (
              <div key={animal._id} className="animal-card">
                <h2 className='heading'>CASE:</h2>
                <h3 className="animal-name"> Animal :{animal.animalName}</h3>
                <h3>Injury Descpriton:</h3>
                <p className="animal-description"> {animal.description}</p>
                {/* Display image if available */}
                {/* {animal.photoURL && <img src={animal.photoURL} alt={animal.animalname} />} */}
                {/* Display image if available */}
                {/* {animal.photo && <img src={animal.photo} alt={animal.animalName} />} */}

              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='future'>
        <div className='imgg'>
          <div className='adopt'><img src={adopt} alt="adopt" /></div>
          <div className='txt'><h1>YOU CAN GIVE AND ADOPT THE ANIMALS FROM PAW Friends!!! SOON ...</h1></div>
          <div className='donate'><img src={donate} alt="donatec" /></div>
        </div>
      </div>
    </>
  );
}

export default Volunteer;




