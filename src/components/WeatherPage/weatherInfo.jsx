import React from "react";

const WeatherInfo = (city, weatherData, error) => {
    if (error) {
        return <div>Error: {error}</div>;
      }
    
      if (!weatherData) {
        return null;
      }

      console.log(weatherData)

      return(
        <div>
            {/* <h2>City name: {city}</h2> */}
            {/* <p>Temperature: {weatherData?.main.temp}°C</p> */}
            {/* <p>Description: {weather[0].description}</p> */}
        </div>
      )
}
export default WeatherInfo;