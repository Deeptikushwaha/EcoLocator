import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
class MapLocator extends Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Default location (San Francisco)
      >
        {/* Add markers for nearby places */}
        {this.props.places.map((place, index) => (
          <Marker
            key={index}
            position={{ lat: place.lat, lng: place.lng }}
            title={place.name}
          />
        ))}
      </GoogleMap>
    );
  }
}

export default withGoogleMap(MapLocator);