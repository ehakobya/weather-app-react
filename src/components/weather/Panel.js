import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Panel = () => {
   return (
      <div className="panel">
         <form action="" className="locationInput">
            <input type="text" className="search" placeholder="Search Location..." />
            <button type="submit" className="submit">
               <SearchOutlinedIcon />
            </button>
         </form>

         <ul className="cities">
            <li className="city">California</li>
            <li className="city">California</li>
            <li className="city">California</li>
            <li className="city">California</li>
         </ul>

         <ul className="details">
            <h4>Weather Details</h4>
            <li>
               <span>Cloudy</span>
               <span className="cloud">89%</span>
            </li>
            <li>
               <span>Humidity</span>
               <span className="humidity">64%</span>
            </li>
            <li>
               <span>Wind</span>
               <span className="wind">8km/h</span>
            </li>
         </ul>
      </div>
   )
}

export default Panel