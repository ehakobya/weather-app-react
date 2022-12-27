import {useState } from 'react';
import './App.css';
import Panel from './components/panel/Panel';
import Weather from './components/weather/Weather';

function App() {

   const [cityInfo, setCityInfo] = useState('');

   return (
      <div className={`App weather-app weather-background ${cityInfo.timeOfDay}-${cityInfo.weatherCondition}`} >
      
         <Weather cityInfo={cityInfo} />
         <Panel setCityInfo={setCityInfo} />

      </div>
   );
}

export default App;
