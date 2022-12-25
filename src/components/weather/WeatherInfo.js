import React from 'react'
import icon from '../../assets/icons/day/113.png';

class WeatherInfo extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         tempSymbol: 'C'
      };
   }

   updateTemp = (num) => {
      return Math.round((num * 1.8) + 32)
   }

   render() {
      return (
         <div className="container">
            <h3 className="brand">the Weather</h3>
            <div>
               <h1 className="temp">
                  {this.state.tempSymbol === 'C' ? 16 : this.updateTemp(16)}
                  &#176;
                  {this.state.tempSymbol}
               </h1>
               <div className="city-time">
                  <h1 className="name">London</h1>
                  <small>
                     <span className="time">06:09</span>
                     -
                     <span className="date">
                        Monday Sep 19
                     </span>
                  </small>
               </div>
               <div className="weather">
                  <img src={icon} alt="weather icon" />
                  <span className="condition">Cloudy</span>
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
      )
   }
}

export default WeatherInfo