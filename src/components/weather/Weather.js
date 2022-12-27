import React from 'react'
import icon from '../../assets/icons/day/113.png';
import './weather.css'

class Weather extends React.Component {

   constructor({props, cityInfo}) {
      super(props);
      this.state = {
         tempSymbol: 'C',
         cityName: cityInfo.name,
         wind_mph: cityInfo.wind_mph,
         wind_kph: cityInfo.wind_kph,
         cloudCondition: cityInfo.text,
         cloud: cityInfo.cloud,
         humidity: cityInfo.humidity,
         temp_c: cityInfo.temp_c,
         temp_f: cityInfo.temp_f,
         localtime: cityInfo.localtime,
      };
   }

   updateTemp = (num) => {
      return Math.round((num * 1.8) + 32)
   }

   render() {
      return (
         <div className="container">
            <h3 className="brand">the.weather</h3>
            <div>
               <h1 className="temp">
                  {this.state.tempSymbol === 'C' ? this.state.temp_c : this.state.temp_f}
                  &#176;
                  {this.state.tempSymbol}
               </h1>
               <div>
                  <div className="city-time">
                     <h1 className="name">{this.state.cityName}</h1>
                     <small>
                        <span className="time">{this.state.localtime}</span>
                     </small>
                  </div>
                  <div className="weather">
                     <img src={icon} alt="weather icon" />
                     <span className="condition">{this.state.cloudCondition}</span>
                  </div>
                  <div className="temp-conversion">
                     <button
                        className={this.state.tempSymbol === 'C' ? 'active-btn temp-btn' : 'temp-btn'}
                        onClick={() => this.setState({ tempSymbol: 'C' })}
                     >
                        C
                     </button>
                     <span className='temp-divider'></span>
                     <button
                        className={this.state.tempSymbol === 'F' ? 'active-btn temp-btn' : 'temp-btn'}
                        onClick={() => this.setState({ tempSymbol: 'F' })}
                     >
                        F
                     </button>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Weather