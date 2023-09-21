
import './App.css';
import {useRef, useEffect} from 'react';
import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Routes,Route,Redirect,Link} from "react-router-dom";

//comp
import Login from "./comp/Login/Login";
//import Credittable from "./comp/Credittable/Credittable";
//import Navbar from './comp/Navbar/Navbar';
import Geom from './comp/Geom';
import Contactform from './comp/Contactform/Contactform';
import { animateScroll } from 'react-scroll';
//import {Routes, Route,Router, useNavigate} from 'react-router-dom';
//import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { move } from 'react-scroll';
import {saveAs} from "file-saver";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      slideIndex: 0,
    };
  }
  
 //Sidebar
  w3_open = () => {
    this.setState({
      sidebarOpen: true,
    });
  };
  w3_close = () => {
    this.setState({
      sidebarOpen: false,
    });
  };

//Slideshow
componentDidMount() {
     this.showSlides();
  }
  
  showSlides = () => {
    let { slideIndex } = this.state;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    this.setState({ slideIndex });

    setTimeout(this.showSlides, 2000);
  };
  
  
  render() {
    
    const { sidebarOpen } = this.state;
   
   const headingStyle = {
    fontFamily: 'Cabin Sketch, sans-serif',
    // Add other styling properties as needed
   };
  //   const [isOpen, setIsOpen] = useState(true)

  //  const move = () => {
  //   setIsOpen(!isOpen)
  // }
   const handleDownload = () => {
    // Create a blob with the content you want to download
    const blob = new Blob(['Hello, World!'], { type: 'text/plain' });

    // Specify the file name for the download
    const fileName = 'example.txt';

    // Use the saveAs function from FileSaver.js to trigger the download
    saveAs(blob, fileName);
  };
  return(
  <Router>
  <div className="main1"> 
      <div className={`w3-sidebar w3-bar-block w3-card w3-animate-left ${sidebarOpen ? 'w3-show' : ''}`} style={{ backgroundColor: 'darkgreen' }}>
          <button className="w3-bar-item w3-button w3-large" onClick={this.w3_close}>
            Close &times;
          </button>
          <a href="#" className="w3-bar-item w3-button">Read About E-waste</a>
          <a href="/first webpage.html/credittable.html" class="w3-bar-item w3-button"target="_main">Credit Rate List</a>

      </div>
    <div id="main">
       <div className="w3-white">
            <button id="openNav" className="w3-button w3-white w3-xlarge" onClick={this.w3_open}>
              &#9776;
            </button>
             <div className='nav-btns'>
             <Link to="/Login"><button className='bar-btn'>Login</button></Link>
             {/* <move onClick={move} activeClass="active" to="intro" spy={true} smooth={true} offset={-80} duration={"500"}></Link> */}
             <button className='bar-btn'>About</button>
             <button className='bar-btn'>Contact Us</button>
             <button className='bar-btn'>Dashboard</button>
             {/* <a href="/loginpage.html" target="_main" className="login" >
              Log In/Register</a>  */}
             </div>
             
              
            <div className="w3-containerw3-black">
            <h1 style={headingStyle}>EcoLocator</h1>
            <img src='/images/logo2g20.webp' alt='deep' />
            </div>
       </div>
       <Routes><Route path="/Login" element={<Login />} /></Routes>
          <br />
          <h1 className='mainheading container'> Unlock a Greener Future – Explore E-Waste Solutions on EcoLocator Now!</h1>
         
          <div className="slideshow-container">

            <div className="mySlides fade">
            <div className="numbertext">1 / 5</div>
            <img src='/images/1.jpg' className="first" height="400px" alt='deep' />
            </div>

           <div className="mySlides fade">
              <div className="numbertext">2 / 5</div>
              <img src="/images/3.png" className="second" height="400px" alt='deep' />
            </div>

            <div className="mySlides fade">
              <div className="numbertext">3 / 5</div>
              <img src='/images/2.png' className="third" height="400px" alt='deep' />
            </div>
            <div className="mySlides fade">
              <div className="numbertext">4 / 5</div>
              <img src="https://namoewaste.com/wp-content/uploads/2023/04/Namo-Blog_Cover-16.jpg" className="fourth" height="400px" />
              
            </div>
            <div className="mySlides fade">
              <div className="numbertext"> 5 / 5</div>
              <img src="https://elytus.com/images/electronic-waste.jpg" className="fifth" height="400px" />
            </div>
          </div> 
          <br />
          
           <div className='dotss' >
            <span className="dot"></span> 
            <span className="dot"></span>
            <span className="dot"></span> 
            <span className="dot"></span> 
            <span className="dot"></span> 
          </div> 
          
      
     </div> 

      <div className='info container'>
        <div className='intro Rbox'>
        <h2 className='heading'>About E-Waste</h2>
        <hr />
        <p>Welcome to EcoLocator, your one-stop destination for finding environmentally responsible e-waste disposal solutions near you. In an era of rapid technological advancement, electronic devices have become an integral part of our lives, but their disposal poses significant environmental challenges. Our platform is designed to bridge the gap between conscientious consumers and certified e-waste recycling facilities, making it easier than ever to locate and connect with trusted disposal centers. Whether you're a conscientious individual seeking to recycle your old gadgets or a business looking for sustainable disposal options, [Your E-Waste Facility Locator Website] is here to empower you with the knowledge and resources to make eco-friendly choices in managing electronic waste. Join us in our mission to promote a cleaner, greener future by exploring the wealth of information and services our platform has to offer.</p>
          <img src='/images/ewaste-graph.jpg' alt='deep' />
         </div>

        <div className='search-cont'>
        
            <div className="searchbutton">
               <Link to="/geom">
              <button className="button">
                 <span className="button-content">Search your nearest E-Waste Facility</span>
              </button>
              </Link>
               <Routes>
          <Route path="/geom" element={<Geom />} />
           
          {/* Add other routes here */}
        </Routes>
              
            </div>
        </div>
       
       
      </div>

       <div>
        <Contactform />
       </div>


      <div className="outro">
        <p></p>
        <div className="arrow" onClick={()=> animateScroll.scrollToTop()}>
          Scroll to home
        </div> 
      </div>
      {/* <Route path='/' exact component={App} /> 
      <Route path="./comp/Geom" component={Geom} />*/}

</div> 
</Router>
)}}
export default App








// import React,{Component} from 'react';
// import SearchLocationInput from "./comp/GooglePlacesApi";
//  import MapComponent from "./comp/Map";
// //  //import Button from './comp/Button/Button';
//  import { useRef, useState, useEffect } from 'react' ;
//  import axios from 'axios';
// // //import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// //import MapLocator from './comp/Map';
// /*import MapComponent from './comp/Map';


// const Geom = () => {
//   const nearbyPlaces = [
//     { name: 'Place 1', lat: 37.7750, lng: -122.4183 },
//     { name: 'Place 2', lat: 37.7745, lng: -122.4208 },
//     // Add more nearby places here
//   ];
  
   
//   return (
//     <div className="App">
//       <h1>Nearby Places Locator</h1>
//        <h1>Current Location</h1>
//       <p>Latitude:{currentLocation.latitude}</p>
//       <p>Longitude:{currentLocation.longitude}</p>
//       <p>City:{currentLocation.city}</p>
//       <MapComponent
//         containerElement={<div style={{ height: '400px', width: '100%' }} />}
//         mapElement={<div style={{ height: '100%' }} />}
//         places={nearbyPlaces}
//         selectedLocation={selectedLocation}
//       />
//     </div>
//   );
// };

// export default App;*/



// /*export class App extends Component {
//   render() {
//     return (
      
//       <Map google={this.props.google} zoom={14} onClick={this.onMapClicked}>
         
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         { <InfoWindow onClose={this.onInfoWindowClose} visible={this.state.showingInfoWindow}>
//             { <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div> }
//         </InfoWindow> }
//       </Map>
//     );
//   }
// }

// //export default App;
// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyAHScxjPfxl7F27RlricNhL03TCDEYrupE"),
//   //LoadingContainer: LoadingContainer
// })(App)*/


// function App() {
//   const nearbyPlaces = [
//     { name: 'Place 1', lat: 37.7750, lng: -122.4183 },
//     { name: 'Place 2', lat: 37.7745, lng: -122.4208 },
//     // Add more nearby places here
//   ];
//   const [currentLocation, setCurrentLocation] = useState({});
  
//   useEffect(() => {
//     getLocation()
//   }, []);
//   const getLocation = async() => {
//     const location = await axios.get('https://ipapi.co/json');
//     setCurrentLocation(location.data);
//   }  
//   var [selectedLocation, setSelectedLocation] = useState({
//     lat: 28.7041,
//     lng: 77.1025,
//   });
//   // const getLocationJS = () => {
//   //   navigator.geolocation.getCurrentPosition((position)=>{
//   //     const {latitude, longitude} = position.coords;
//   //     setCurrentLocationJs({latitude, longitude});
//   //   });
//   // }
//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
      
//       <div className='searchplaces'>

//       </div>
      
//       <h1>Current Location</h1>
//       <p>Latitude:{currentLocation.latitude}</p>
//       <p>Longitude:{currentLocation.longitude}</p>
//       <p>City:{currentLocation.city}</p>
      
//       <SearchLocationInput setSelectedLocation={setSelectedLocation} />
      
//       <MapComponent
//         containerElement={<div style={{ height: '400px', width: '100%' }} />}
//         mapElement={<div style={{ height: '100%' }} />}
//         places={nearbyPlaces}
//         selectedLocation={selectedLocation}
//       />
//     </div>
//   );
// }
 
// export default App





      




