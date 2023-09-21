import React, { useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { REACT_APP_GOOGLE_MAPS_KEY } from "./env";
import { useRef, useState} from 'react' ;
import { Component } from 'react';

const MapComponent = ({ selectedLocation,places }) => {          //
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error"; 
  if (!isLoaded) return "Maps";
//   const nearbyPlaces = [
//     { name: 'Place 1', lat: 37.7750, lng: -122.4183 },
//     { name: 'Place 2', lat: 37.7745, lng: -122.4208 },
//     // Add more nearby places here
//   ];
 
  return (
    <div style={{ marginTop: "50px" }}>
       
      <GoogleMap
    //    defaultZoom={14}
    //     defaultCenter={{ lat: 37.7749, lng: -122.4194 }}

        mapContainerStyle={{
          height: "800px",
        }}
        center={selectedLocation}
        zoom={13}
        onLoad={onMapLoad}
      >

         <MarkerF
           //key={index}
           position={{ lat: places.lat, lng: places.lng }}
           // title={place.name}
          //
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
        />
        <MarkerF
          position={selectedLocation}
        />
        <MarkerF
           position={{ lat: places.lat, lng: places.lng }}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
        />
        
        
       {/* {this.props.places.map((place,index) => (
        <MarkerF
           key={index}
           position={{ lat: place.lat, lng: place.lng }}
            title={place.name}
        //   position={selectedLocation}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
        />
        ))} */}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;