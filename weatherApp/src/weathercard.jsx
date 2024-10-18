import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    // Retrieve recent searches from local storage when the component mounts
    const storedSearches = JSON.parse(localStorage.getItem("recentSearches"));
    if (storedSearches) {
      setRecentSearches(storedSearches);
    }
  }, []);

  useEffect(() => {
    // Store recent searches in local storage whenever they change
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const fetchWeather = async () => {
    try {
      const apiKey = "dd78044065b24d7cae0104700241810"; // Replace with your WeatherAPI key
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);
      addToRecentSearches(city);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  const addToRecentSearches = (city) => {
    // Add the city to recent searches if it doesn't already exist
    if (!recentSearches.includes(city)) {
      const updatedSearches = [city, ...recentSearches].slice(0, 5); // Keep the list to max 5 items
      setRecentSearches(updatedSearches);
    }
  };

  const handleDeleteSearch = (cityToDelete) => {
    const updatedSearches = recentSearches.filter(
      (item) => item !== cityToDelete
    );
    setRecentSearches(updatedSearches);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather();
    }
  };

  const handleRecentSearchClick = (city) => {
    setCity(city);
    fetchWeather();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-700 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Weather App</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          className="w-full p-3 rounded-md text-gray-700"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 hover:bg-blue-800 text-white p-3 rounded-md">
          Get Weather
        </button>
      </form>

      {error && <p className="mt-4 text-red-500 text-lg">{error}</p>}

      {weatherData && (
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800">
            {weatherData.location.name}, {weatherData.location.country}
          </h2>
          <div className="flex items-center mt-4">
            <img
              src={weatherData.current.condition.icon}
              alt={weatherData.current.condition.text}
              className="w-20 h-20"
            />
            <div className="ml-4">
              <p className="text-4xl text-gray-800 font-bold">
                {weatherData.current.temp_c}°C
              </p>
              <p className="text-gray-600">
                {weatherData.current.condition.text}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-semibold">Wind Speed:</span>{" "}
              {weatherData.current.wind_kph} kph
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Humidity:</span>{" "}
              {weatherData.current.humidity}%
            </p>
          </div>
        </div>
      )}

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className="mt-8 w-full max-w-md bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Recent Searches
          </h3>
          <ul>
            {recentSearches.map((search) => (
              <li key={search} className="flex justify-between items-center">
                <button
                  onClick={() => handleRecentSearchClick(search)}
                  className="text-blue-500 hover:underline">
                  {search}
                </button>
                <button
                  onClick={() => handleDeleteSearch(search)}
                  className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
