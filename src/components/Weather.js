import React from 'react'
import { Card } from 'semantic-ui-react'
import moment from 'moment';
import { Button } from 'semantic-ui-react';


const refresh = () => {
  window.location.reload();
}

const Weather = ({ weatherData, city }) => {
  // console.log(weatherData[0].main.temp_max)

  // let list = weatherData.weatherData.list;
  console.log(weatherData)


  return (
    <div className="Card ">
      <div className="top">
        <p className="header padding">{city}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex color padding ">
        <p className="day color"> Day: {moment().format('dddd')}, <span>{weatherData.dt_txt}</span></p>
        {/* <p className="day color">{moment().format('dddd')},<span>{weatherData.weatherData[0].dt_txt}</span> </p> */}
        {/* <p className="description color ">{weatherData.weather[0].main} </p> */}
      </div>

      <div id="icon" className='icon' >
        <p className="description color ">{weatherData.weather[0].main} </p>
        <img id="icon" className='padding ' style={{ "width": "5rem" }} src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} />
      </div>
      {/* <div id="icon"><img id="wicon" src={`http://openweathermap.org/img/w/${weatherData.weatherData[0].weather[0].icon}.png`} alt="Weather icon" /></div> */}
      {/* <img className="description  color" src={`${list[0].weather[0].icon}`} alt="weather">{list[0].weather[0].icon}</img> */}
      {/* </div> */}



      <div className="flex color padding">
        <p className="sunrise-sunset color">Wind: {weatherData.wind["speed"]}</p>
        <p className="sunrise-sunset color">Feels like: {weatherData.main["feels_like"]}</p>
        {/* <p className="sunrise-sunset color">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p> */}
        {/* <p className="sunrise-sunset color">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p> */}
      </div>
    </div >

  )
}

export default Weather