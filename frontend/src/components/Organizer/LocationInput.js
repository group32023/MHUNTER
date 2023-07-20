import React, { useState, useRef } from 'react';
import { GoogleMap, Marker, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const libraries = ['places'];

const LocationInput = ({ onLocationSelect, setFormData }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapRef = useRef(null);
  const searchBoxRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');

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

        setSearchValue(newLocation.address);
        setSelectedLocation(newLocation);
        onLocationSelect(newLocation);

        // Update the location property in the formData state with the selected location data
        setFormData((prevFormData) => ({
          ...prevFormData,
          location: newLocation.address,
          latitude: newLocation.lat,
          longitude: newLocation.lng,
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
    console.log(data);

    let formattedAddress = '';

    if (data.results && data.results.length > 0) {
      const result = data.results[0];
      const addressComponents = result.address_components;

      // Extract specific address components
      const placeName = addressComponents.find((component) =>
        component.types.includes('establishment')
      )?.long_name;
      const streetName = addressComponents.find((component) =>
        component.types.includes('route')
      )?.long_name;
      const town = addressComponents.find((component) =>
        component.types.includes('locality')
      )?.long_name;
      const country = addressComponents.find((component) =>
        component.types.includes('country')
      )?.long_name;

      // Construct the formatted address with available address components
      formattedAddress = [placeName, streetName, town, country].filter(Boolean).join(', ');
    }

    return formattedAddress;
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
    // if (searchBoxRef.current) {
    //   searchBoxRef.current.set('query', address);
    // }

    setSelectedLocation(newLocation);
    onLocationSelect(newLocation);
    // setSearchValue(newLocation.address); 

    const searchBoxInput = document.querySelector('.searchbox input'); // Get the input element
    if (searchBoxInput) {
      searchBoxInput.value = newLocation.address;
    }

    // Print the location value in the console
    console.log(address);

    setFormData((prevFormData) => ({
      ...prevFormData,
      location: address,
      latitude: newLocation.lat,
      longitude: newLocation.lng,
    }));

  };


  return (
    <LoadScript googleMapsApiKey="AIzaSyBHUE7QQ_cie9vWpTKHX7rOuqAoD8uxhCA" libraries={libraries}>
      <div>

        <div className='searchbox' style={{color: 'white'}}>
          <StandaloneSearchBox onLoad={(searchBox) => (searchBoxRef.current = searchBox)} onPlacesChanged={handlePlaceSelect} >
            <input type="text" placeholder="Enter event location"  style={{

              width: '100%',
              padding: "8px",
              border: '1px solid white',
              backgroundColor:'#24292D',
              borderRadius: '12px',
              color: 'white'
              
            }}/>
          </StandaloneSearchBox>
        </div>
        {selectedLocation && (
          <GoogleMap
            onLoad={handleMapLoad}
            onClick={handleMapClick} // Add the click event handler to the map
            center={selectedLocation}
            zoom={15}
            mapContainerStyle={{ height: '200px', width: '80%' }}
          >
            <Marker position={selectedLocation} />
          </GoogleMap>
        )}
      </div>
    </LoadScript>
  );
};

export default LocationInput;