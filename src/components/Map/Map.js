import React from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";



const containerStyle = {
    width: "800px",
    height: "400px",
  };
  
  const center = {
    lat: 35.69575,
    lng: 139.77521,
  };

function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      ></GoogleMap>
    </LoadScript>
  )
}

export default Map
