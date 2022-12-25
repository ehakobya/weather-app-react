import React from 'react';
import Panel from './Panel';
import './style.css'

import WeatherInfo from './WeatherInfo'

const Weather = () => {
   return (
      <div className="weather-app">
         
         <WeatherInfo />
         <Panel />

         {/* <div className="panel">
            <form id="locationInput">
               <input type="text" className='search' placeholder='Seach Location...'/>
               <button type="submit" className='submit'>

               </button>
            </form>

            <ul className="cities">
               <li className="city">New York</li>
               <li className="city">New York</li>
               <li className="city">New York</li>
               <li className="city">New York</li>
            </ul>

            <ul className="details">
               <h4>Weather Details</h4>
               <li>
                  <span>Cloudy</span>
                  span
               </li>
            </ul>
         </div> */}
      </div>
   )
}

export default Weather