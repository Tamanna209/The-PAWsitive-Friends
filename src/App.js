
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css'
import  Navbar  from './Components/Navbar';
import Home from './Components/Home';
import  AboutUs from './Components/AboutUs';
import  Rescue from './Components/Rescue';
import  Help  from './Components/Help';
import Footer from './Components/Footer';
import Volun from './Components/Volunteer';
// import volunteer from './Components/volunteer';
// import Volun from './Components/Volunteer';\


function App() {
  return (

    <>
      
       < BrowserRouter>
          <Navbar />
          <Routes>
             <Route exact path="/" element={ <Home/>} />
             <Route path="/aboutUs" element={ <AboutUs/>} />
             <Route path="/rescue" element={ <Rescue/>} />
             <Route path ="/help" element={ <Help/>} />
             {/* <Route path="/volunteer" element={ <Volun /> } /> */}
             {/* <Route path="/volunteer" element={ <volunteer/>} /> */}
             {/* <Route exact path="/volunteer" component={  <volunteer/>} /> */}
             <Route path='/volunteer' element={<Volun/>}/>
          </Routes>
          <Footer/>
       </BrowserRouter>
      
     
    
     </>
  )
}
export default App;
// document.body.style.backgroundImage = `url(${BackImg})`;
// document.body.style.backgroundSize = 'cover';
// document.body.style.backgroundAttachment = 'fixed';
// document.body.style.backgroundPosition = 'center';
// document.body.style.backgroundRepeat = 'no-repeat';
// document.body.style.opacity='2';