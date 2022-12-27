const API_KEY = 'dccd4b59d91d4a90aba235345222512'

const getWeatherData = async (city) => {

   const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
   const data = await fetch(URL)
      .then((res) => res.json())
      .then((data) => data)

   const {
      location: { name, localtime },
      current: { temp_c, temp_f, wind_mph, wind_kph, humidity, cloud, is_day, precip_mm, precip_in, feelslike_c, feelslike_f, wind_dir,
         condition: { text, icon, code } }
   } = data;

   const dayOfTheWeek = (day, month, year) => {
      const weekday = [
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday"
      ];

      return weekday[new Date(`${year}/${month}/${day}`).getDay()].toUpperCase()
   };

   const year = parseInt(localtime.substr(0, 4));
   const month = parseInt(localtime.substr(5, 2));
   const day = parseInt(localtime.substr(8, 2));
   const time = localtime.substr(11);
   const weekday = dayOfTheWeek(day, month, year);

   let timeOfDay = 'day';
   let weatherCondition = '';

   if (is_day) {
      timeOfDay = "day"
   } else {
      timeOfDay = "night"
   }

   if (code === 1000) {
      weatherCondition = "clear"
   }
   else if ((code === 1003 || code === 1006 || code === 1009 || code === 1030 ||
      code === 1087 || code === 1135 || code === 1273 || code === 1276 ||
      code === 1279 || code === 1282)) {
      weatherCondition = "cloudy"
   }
   else if ((code === 1063 || code === 1069 || code === 1072 || code === 1150 ||
      code === 1153 || code === 1180 || code === 1183 || code === 1186 ||
      code === 1192 || code === 1195 || code === 1204 || code === 1207 ||
      code === 1240 || code === 1243 || code === 1246 || code === 1249 ||
      code === 1252)) {
      weatherCondition = "rainy"
   } else {
      weatherCondition = "snowy"
   }

   return {
      name, timeOfDay, weatherCondition, year, month, day, time, weekday, temp_c, temp_f, wind_mph, wind_kph, humidity, cloud, text, icon, precip_mm, precip_in, feelslike_c, feelslike_f, wind_dir
   }
}

export default getWeatherData;


// http://api.weatherapi.com/v1/current.json?key=dccd4b59d91d4a90aba235345222512&q=New-York