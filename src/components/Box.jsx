import React, { useState } from 'react'
import axios from 'axios'

export default function Box() {
  const [city, setCity] = useState();
  const[weather, setWeather] = useState(); 
  const handleCityChange = (e)=>{
    setCity(e.target.value)

  }
  
  const fetchWeather = async () => {
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'b8d33f7bd7ae96138dadb8c76d2ab0f6'}`)
      setWeather(response);

    }
    catch(error){
      console.log("error fetching weather data...")

    }

  }

  const handleGetw = ()=>{
    fetchWeather();

  }
  return (
      <div className='w-container'>
      <input className='holder' placeholder='Enter Location' type="text" value={city} onChange={handleCityChange} /> 
      <button className='button' onClick={handleGetw}> Search</button>
      {weather && <>
      <div className='w-info'> <h3> {weather.data.name}</h3>
      <p> Temp is:  {weather.data.main.temp}</p>
      <p> Humidity: {weather.data.main.humidity}</p>
      <p> Description: {weather.data.weather[0].description}</p>
      </div></>}
    </div>
  )
}
