
import './App.css';
import {useRef, useEffect} from 'react';
import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Routes,Route,Redirect,Link} from "react-router-dom";

//components
import Login from "./comp/Login/Login";
import Geom from './comp/Geom';
import Contactform from './comp/Contactform/Contactform';
import { animateScroll } from 'react-scroll';
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
  //  const handleDownload = () => {
  //   const blob = new Blob(['Hello, World!'], { type: 'text/plain' });
  
  //   const fileName = 'table.txt';
  
  //   saveAs(blob, fileName);
  // };
    
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
</div> 
</Router>
)}}
export default App








