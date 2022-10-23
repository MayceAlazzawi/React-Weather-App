import React from 'react'
import { Card } from 'semantic-ui-react'
import moment from 'moment';
import { Button } from 'semantic-ui-react';


const refresh = () => {
  window.location.reload();
}

const Weather = (weatherData) => {
  console.log(weatherData.weatherData.name)

  return (
    <div className="main">

      <div className="top">
        <p className="header">{weatherData.weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>

      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{weatherData.weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">Temprature: {weatherData.weatherData.main.temp} &deg;C</p>
        <p className="temp">Humidity: {weatherData.weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Sunset: {new Date(weatherData.weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>

    </div>

  )
}

export default Weather