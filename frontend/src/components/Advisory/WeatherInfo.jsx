import React, { useState, useEffect } from 'react';

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch weather data from API
    fetch('/api/weather')
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  if (!weather) return <p>Loading weather information...</p>;

  return (
    <div className="weather-info">
      <h2>Weather Advisory</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
};

export default WeatherInfo;
