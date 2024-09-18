import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCity } from '../redux/locationSlice.js';
import axios from 'axios'

export const useGetUserLocation = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            const city = await fetchCityName(lat, lng);

            dispatch(setCity(city || ''));
          },
        );
      }
    };
    getLocation();
  }, [dispatch]);
};

const fetchCityName = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );
    
    if (response.data && response.data.address) {
      // console.log(response.data.address.city);
      return response.data.address.city;
    }
  } catch (err) {
    console.log(err);
    return "";
  }
};
