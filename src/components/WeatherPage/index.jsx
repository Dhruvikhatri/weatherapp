import React, { useState } from "react";
import axios from "axios";
import { Input, Button } from "antd";
import './style.css'
const WeatherApp = () => {
    const [weatherData, setWeather] = useState();
    const [error, setError] = useState()
    const APIkey = '6b49cbf77772a3758de3fb649685c2c5'
    const [city, setCity] = useState(null)

    const fetchWeatherData = async() => {
        if(city){
            try{
                const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)
                setWeather(response.data);
                console.log(response.data)
                setError('');
              }catch (error) {
                setWeather(null);
                setError('Failed to fetch weather data. Please try again.');
                setTimeout(() => {
                    setError('');
                }, 2000);
              }
            setCity('');
        }
        
        else{
            setError('Please enter city name')
            setTimeout(() => {
                setError('');
            }, 2000);
        }
    };
    return (
        <>
        <div className="weatherForm">
            <Input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Button type="primary" onClick={fetchWeatherData}>Search</Button>
        </div>
        {error && <div className="alert">{error}</div>} 
        {weatherData? (
            <div className="weatherData">
                <h2>City: {weatherData.name}</h2>
                <ul className="weatherlist">
                    <li><b>Lat:</b> {weatherData.coord.lat} <b>& lon:</b> {weatherData.coord.lon}</li>
                    <li><b>Temperature: </b>{weatherData.main.temp}</li>
                    <li><b>Description:</b> {weatherData.weather[0].description}</li>
                    <li><b>Wind speed:</b> {weatherData.wind.speed}</li>
                </ul>
            </div>):
         (<div>No Record Found</div>)}
        </>
    )
}
export default WeatherApp