import React, { useEffect, useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './panel.css'
import getWeatherData from '../service/WeatherService'

const Panel = ({ setCityInfo }) => {

   const [textInput, setTextInput] = useState('');
   const [selectedCity, setSelectedCity] = useState('Paris')
   const [weather, setWeather] = useState('');

   useEffect(() => {
      const fetchWeatherData = async () => {
         const data = await getWeatherData(selectedCity);
         setWeather(data);
         setCityInfo(data)
         console.log(data);
      }
      fetchWeatherData()
   }, [selectedCity])

   const enterKeyPressed = (e) => {
      if (e.keyCode === 13) {
         setSelectedCity(e.currentTarget.value);
         e.currentTarget.blur();
      }
   }

   function handleSubmit(e) {
      e.preventDefault();
      setSelectedCity(textInput);
   }

   return (
      <div className="panel">
         <form onSubmit={handleSubmit} className="locationInput">
            <input
               value={textInput}
               onChange={(e) => setTextInput(e.target.value)}
               onKeyDown={enterKeyPressed}
               type="text"
               className="search"
               placeholder="Search Location..." />
            <button
               type='submit'
               className="submit" >
               <SearchOutlinedIcon />
            </button>
         </form>

         <ul className="details">
            <h4>Weather Details</h4>
            <li>
               <span>Clouds</span>
               <span className="cloud">{weather.cloud}%</span>
            </li>
            <li>
               <span>Humidity</span>
               <span className="humidity">{weather.humidity}%</span>
            </li>
            <li>
               <span>Wind</span>
               <div className='two-row-data'>
                  <span className="wind">{weather.wind_kph}km/h {weather.wind_dir}</span>
                  <span className="wind">{weather.wind_mph}mp/h {weather.wind_dir}</span>
               </div>
            </li>
            <li>
               <span>Precipitation</span>
               <div className='two-row-data'>
                  <span className="wind">{weather.precip_mm} mm</span>
                  <span className="wind">{weather.precip_mm} in</span>
               </div>

            </li>
            <li>
               <span>Feels Like</span>
               <div className='two-row-data'>
                  <span className="wind">{weather.feelslike_c} &#176;C</span>
                  <span className="wind">{weather.feelslike_f} &#176;F</span>
               </div>

            </li>
         </ul>
      </div>
   )
}

export default Panel