import React, { useState } from 'react'
import './weather.css'

const Weather = ({ cityInfo }) => {

   /* eslint-disable-next-line */
   const [tempUnit, setTempUnit] = useState('C')

   return (
      <div className="container">
         <h3 className="brand">the.weather</h3>
         <div>
            <h1 className="temp">
               {tempUnit === 'C' ? cityInfo.temp_c : cityInfo.temp_f}
               &#176;
               {tempUnit}
            </h1>
            <div>
               <div className="city-time">
                  <h1 className="name">{cityInfo.name}</h1>
                  <small>
                     <div className="localtime">
                        <span className="weekday">{cityInfo.weekday}</span>
                        <div>
                           <span className="date">{cityInfo.month}/</span>
                           <span className="date">{cityInfo.day}/</span>
                           <span className="date">{cityInfo.year}</span>
                        </div>
                        <span className="time">{cityInfo.time}</span>
                     </div>
                  </small>
               </div>
               <div className="weather">
                  <img src={cityInfo.icon} alt="weather icon" />
                  <span className="condition">{cityInfo.text}</span>
               </div>
               <div className="temp-conversion">
                  <button
                     className={tempUnit === 'C' ? 'active-btn temp-btn' : 'temp-btn'}
                     onClick={() => setTempUnit('C')}>
                     C
                  </button>
                  <span className='temp-divider'></span>
                  <button
                     className={tempUnit === 'F' ? 'active-btn temp-btn' : 'temp-btn'}
                     onClick={() => setTempUnit('F')}>
                     F
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Weather