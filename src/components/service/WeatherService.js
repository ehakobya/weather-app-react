const API_KEY = 'dccd4b59d91d4a90aba235345222512'

const getWeatherData = async (city) => {
   
   const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`

   const data = await fetch(URL)
      .then((res) => res.json())
      .then((data) => data)

   const {
      location: { name, localtime },
      current: { temp_c, temp_f, wind_mph, wind_kph, humidity, cloud,
         condition: { text } }
   } = data;

   return {
      name, localtime, temp_c, temp_f, wind_mph, wind_kph, humidity, cloud, text
   }
}

export default getWeatherData;


// http://api.weatherapi.com/v1/current.json?key=dccd4b59d91d4a90aba235345222512&q=New-York