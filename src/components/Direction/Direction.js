import {React,useState} from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';


const containerStyle = {
    width: '400px',
    height: '550px'
};

const location = {
    lat: 23.777,
    lng: 90.499
};


function Direction({origin, destination}) {
    const [directionResponse, setDirectionResponse] = useState(null);
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={14}
            >
                {
                    origin !== '' && destination !== '' && <DirectionsService
                    // required
                    options={{
                      destination: destination,
                      origin: origin,
                      travelMode: 'WALKING'
                    }}
                    // required
                    callback={res => {
                        if(res !== null){
                          setDirectionResponse(res);
                        }
                    }}
                  />
                }
                {
                    directionResponse && <DirectionsRenderer
                    // required
                    options={{ 
                      directions: directionResponse
                    }}
                    
                  />
                }
            </GoogleMap>
        </LoadScript>
  )
}

export default Direction