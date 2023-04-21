import { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  console.log("Hello World")
  const search = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const appid = 'f00c38e0279b7bc85480c3fe775d518c';

      try {
        const response = await axios.get(url, { params: { q: query, units: 'metric', appid } });
        setWeather(response.data);
        setQuery('');
      } catch (error) {
        console.log('error', error);
        setWeather(null);
      }
    }
  };



  return (
    <div className="bg-slate-700  min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-96">
        <h1 className="text-gray-800  font-semibold text-2xl mb-4">Weather App</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">Location</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Enter city name"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyPress={search}
          />
        </div>
        {weather && (
          <>
            <div className="mb-4">
              <div className="text-gray-800 font-semibold text-lg">{weather.name}, {weather.sys.country}</div>
              
            </div>
            <div className="mb-4 flex items-center justify-center">
              <img className="inline-block" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
              <div className="text-gray-800 font-semibold text-5xl ml-4">{Math.round(weather.main.temp)}&deg;C</div>
            </div>
            <div className="text-gray-700">{weather.weather[0].description.toUpperCase()}</div>
            <div className="text-gray-700">Humidity: {weather.main.humidity}%</div>
            <div className="text-gray-700">Wind Speed: {weather.wind.speed} m/s</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Weather;
