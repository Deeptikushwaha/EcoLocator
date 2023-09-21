
import React,{Component} from 'react';
import SearchLocationInput from "./GooglePlacesApi";
 import MapComponent from "./Map";
 import { useRef, useState, useEffect } from 'react' ;
 import axios from 'axios';
// //import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//import MapLocator from './comp/Map';
/*import MapComponent from './comp/Map';


const Geom = () => {
  const nearbyPlaces = [
    { name: 'Place 1', lat: 37.7750, lng: -122.4183 },
    { name: 'Place 2', lat: 37.7745, lng: -122.4208 },
    // Add more nearby places here
  ];
  
   
  return (
    <div className="App">
      <h1>Nearby Places Locator</h1>
       <h1>Current Location</h1>
      <p>Latitude:{currentLocation.latitude}</p>
      <p>Longitude:{currentLocation.longitude}</p>
      <p>City:{currentLocation.city}</p>
      <MapComponent
        containerElement={<div style={{ height: '400px', width: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        places={nearbyPlaces}
        selectedLocation={selectedLocation}
      />
    </div>
  );
};

export default App;*/



/*export class App extends Component {
  render() {
    return (
      
      <Map google={this.props.google} zoom={14} onClick={this.onMapClicked}>
         
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        { <InfoWindow onClose={this.onInfoWindowClose} visible={this.state.showingInfoWindow}>
            { <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> }
        </InfoWindow> }
      </Map>
    );
  }
}

//export default App;
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAHScxjPfxl7F27RlricNhL03TCDEYrupE"),
  //LoadingContainer: LoadingContainer
})(App)*/


const Geom=()=> {
  const nearbyPlaces = [
    { name: 'Place 1', lat: 37.7750, lng: -122.4183 },
    { name: 'Place 2', lat: 37.7745, lng: -122.4208 },
    // Add more nearby places here
  ];
  const [currentLocation, setCurrentLocation] = useState({});
  
  useEffect(() => {
    getLocation()
  }, []);
  const getLocation = async() => {
    const location = await axios.get('https://ipapi.co/json');
    setCurrentLocation(location.data);
  }  
  var [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041/*28.6542*/,
    lng:77.1025 /*77.2373*/,
  });
  // const getLocationJS = () => {
  //   navigator.geolocation.getCurrentPosition((position)=>{
  //     const {latitude, longitude} = position.coords;
  //     setCurrentLocationJs({latitude, longitude});
  //   });
  // }
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      
      <div className='searchplaces'>

      </div>
      
      <h1>Detecting Current Location</h1>
      <p>Latitude:{currentLocation.latitude}</p>
      <p>Longitude:{currentLocation.longitude}</p>
      <p>City:{currentLocation.city}</p>
      
      <SearchLocationInput setSelectedLocation={setSelectedLocation} />
      
      <MapComponent
        containerElement={<div style={{ height: '400px', width: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        places={nearbyPlaces}
        selectedLocation={selectedLocation}
      />
    </div>
  );
}
 
export default Geom

