import React, { useState, useRef } from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const libraries = ['places'];

const LocationInput = ({ onLocationSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapRef = useRef(null);
  const searchBoxRef = useRef(null);

  const handleMapLoad = (map) => {
    mapRef.current = map;
  };

  const handlePlaceSelect = () => {
    if (searchBoxRef.current) {
      const places = searchBoxRef.current.getPlaces();
      if (places.length > 0) {
        const place = places[0];
        const newLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address: place.formatted_address,
        };
        setSelectedLocation(newLocation);
        onLocationSelect(newLocation);
      }
    }
  };

  const handleMapClick = (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      address: '', // You can set the address as an empty string for now or use a reverse geocoding API to get the address based on the latLng.
    };
    setSelectedLocation(newLocation);
    onLocationSelect(newLocation);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBHUE7QQ_cie9vWpTKHX7rOuqAoD8uxhCA" libraries={libraries}>
      <div>
        <StandaloneSearchBox onLoad={(searchBox) => (searchBoxRef.current = searchBox)} onPlacesChanged={handlePlaceSelect}>
          <input type="text" placeholder="Enter a location" />
        </StandaloneSearchBox>
        {selectedLocation && (
          <GoogleMap
            onLoad={handleMapLoad}
            onClick={handleMapClick} // Add the click event handler to the map
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