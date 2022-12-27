import React from 'react'
import { useState, useEffect } from 'react';
import getWeatherData from '../service/WeatherService'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './panel.css'

const Panel = ({ setCityInfo }) => {

   const [searchTerm, setSearchTerm] = useState('');
   const [weather, setWeather] = useState('');

   // useEffect(() => {
   //    const fetchWeatherData = async () => {
   //       const data = await getWeatherData(searchTerm);
   //       setWeather(data);
   //       console.log(weather);
   //    };
   //    fetchWeatherData();
   // }, [])

   const fetchWeatherData = async (searchTerm) => {
      const data = await getWeatherData(searchTerm);
      setWeather(data);
   };

   const handleChange = event => {
      setSearchTerm(event.target.value);
   };

   const handleClick = async event => {
      console.log(searchTerm)
      await fetchWeatherData(searchTerm);
      console.log(weather);
      setCityInfo(weather);
   };

   return (
      <div className="panel">
         <div className="locationInput">
            <input
               onChange={handleChange}
               value={searchTerm}
               type="text"
               className="search"
               placeholder="Search Location..." />
            <button
               type="submit"
               className="submit"
               onChange={handleChange}
               onClick={handleClick} >
               <SearchOutlinedIcon />
            </button>
         </div>

         {/* <ul className="cities">
            <li className="city">California</li>
            <li className="city">California</li>
            <li className="city">California</li>
            <li className="city">California</li>
         </ul> */}

         <ul className="details">
            <h4>Weather Details</h4>
            <li>
               <span>Cloudy</span>
               <span className="cloud">{weather.cloud}%</span>
            </li>
            <li>
               <span>Humidity</span>
               <span className="humidity">{weather.humidity}%</span>
            </li>
            <li>
               <span>Wind</span>
               <span className="wind">{weather.wind_kph}8km/h - {weather.wind_mph}8mp/h</span>
            </li>
         </ul>
      </div>
   )
}

export default Panel