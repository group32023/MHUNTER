import React, { useState, useRef } from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const libraries = ['places'];

const LocationInput = ({ onLocationSelect,setFormData  }) => {
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
  
        // Update the location property in the formData state with the selected location data
        setFormData((prevFormData) => ({
          ...prevFormData,
          location: newLocation.address,
        }));
      }
    }
  };

  const fetchAddressFromLatLng = async (lat, lng) => {
    const apiKey = 'AIzaSyBHUE7QQ_cie9vWpTKHX7rOuqAoD8uxhCA'; // Replace with your actual API key
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    );
    const data = await response.json();
  
    if (data.results && data.results.length > 0) {
      const result = data.results[0];
      const addressComponents = result.address_components;
  
      let address = {};
  
      for (const component of addressComponents) {
        const types = component.types;
        if (types.includes('street_number')) {
          address.streetNumber = component.long_name;
        } else if (types.includes('route')) {
          address.streetName = component.long_name;
        } else if (types.includes('locality')) {
          address.town = component.long_name;
        } else if (types.includes('administrative_area_level_1')) {
          address.state = component.long_name;
        } else if (types.includes('country')) {
          address.country = component.long_name;
        } else if (types.includes('postal_code')) {
          address.postalCode = component.long_name;
        }
      }
  
      return address;
    }
  
    return {};
  };


  const handleMapClick = async (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      address: '', // We will fetch the address using the Geocoding API
    };
  
    // Fetch address using reverse geocoding
    const address = await fetchAddressFromLatLng(newLocation.lat, newLocation.lng);
    newLocation.address = address;
  
    // Set the search box value to the fetched address
    if (searchBoxRef.current) {
      const formattedAddress = [
        address.streetNumber,
        address.streetName,
        address.town,
        address.state,
        address.country,
        address.postalCode,
      ]
        .filter(Boolean)
        .join(', ');
      searchBoxRef.current.set('query', formattedAddress);
    }
  
    setSelectedLocation(newLocation);
    onLocationSelect(newLocation);
  
    // Print the location value in the console
    console.log(newLocation.address);

    setFormData((prevFormData) => ({
      ...prevFormData,
      location: newLocation.address,
    }));

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