import { useEffect, useState } from 'react';
import './App.css';
import Panel from './components/panel/Panel';
import getWeatherData from './components/service/WeatherService';
import Weather from './components/weather/Weather';

function App() {

   const [cityInfo, setCityInfo] = useState('');

   // useEffect(() => {
   //    const fetchWeatherData = async () => {
   //       const data = await getWeatherData('Paris');
   //       setCityInfo(data);
   //    };
   //    fetchWeatherData();
   // }, [])


   // const [city, setCity] = useState('Paris');


   return (
      <div className="App weather-app">

         <Weather cityInfo={cityInfo} />
         <Panel setCityInfo={setCityInfo} />

      </div>
   );
}

export default App;
