import React from 'react'
import { Card } from 'semantic-ui-react'
import moment from 'moment';
import { Button } from 'semantic-ui-react';


const refresh = () => {
  window.location.reload();
}

const Weather = (weatherData) => {
  console.log(weatherData.weatherData)

  return (
    <div className="Card ">
      <div className="top">
        <p className="header padding">{weatherData.weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex color padding">
        <p className="day color">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description  color">{weatherData.weatherData.weather[0].main}</p>
      </div>

      <div className="flex color padding">
        <p className="temp color">Temprature: {weatherData.weatherData.main.temp} &deg;C</p>
        <p className="temp color">Humidity: {weatherData.weatherData.main.humidity} %</p>
      </div>

      <div className="flex color padding">
        <p className="sunrise-sunset color">Sunrise: {new Date(weatherData.weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset color">Sunset: {new Date(weatherData.weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    </div>

  )
}

export default Weather