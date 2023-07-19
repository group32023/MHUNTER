import React, { useState, useRef } from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const LocationInput = ({ onLocationSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const searchBoxRef = useRef(null);

  const handlePlaceSelect = () => {
    if (searchBoxRef.current) {
      const places = searchBoxRef.current.getPlaces();
      if (places.length > 0) {
        const place = places[0];
        setSelectedLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address: place.formatted_address,
        });
        onLocationSelect({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            address: place.formatted_address,
          });
      }
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBHUE7QQ_cie9vWpTKHX7rOuqAoD8uxhCA" libraries={['places']}>
      <div>
        <StandaloneSearchBox
          onLoad={(searchBox) => (searchBoxRef.current = searchBox)}
          onPlacesChanged={handlePlaceSelect}
        >
          <input type="text" placeholder="Enter a location" />
        </StandaloneSearchBox>
        {selectedLocation && (
          <GoogleMap
            center={selectedLocation}
            zoom={15}
            mapContainerStyle={{ height: '300px', width: '100%' }}
          >
            <Marker position={selectedLocation} />
          </GoogleMap>
        )}
      </div>
    </LoadScript>
  );
};

export default LocationInput;