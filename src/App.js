import './App.css';
import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/sea-green';
import { findByLabelText } from '@testing-library/react';
function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState({});

  //useEffect its goal is to load the functions when the application is loaded and reloaded
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      //Fetch weather data from weather api based on our latitude and longitude
      await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=f37b157d4e4a55815a943abd53f0d644  `)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(data);
        });
    }
    fetchData();
  }, [lat, long]);


  return (
    <div className="App">
      {(typeof data.main !== "undefined") ?
        (
          <Splide aria-labelledby="My Favorite Images" options={{
            // rewind: true,
            width: 1400,
            gap: '1rem',
            display: "flex",
            // flex-direction: "row"
          }}>
            <SplideSlide >
              {/* <SplideTrack> */}
              <Weather weatherData={data} />
              <Weather weatherData={data} />
              <Weather weatherData={data} />
              {/* </SplideTrack> */}
            </SplideSlide>

            <SplideSlide >
              {/* <SplideTrack> */}
              <Weather weatherData={data} />
              <Weather weatherData={data} />
              {/* </SplideTrack> */}
            </SplideSlide>


          </Splide>
        ) : (
          <div></div>
        )
      }
    </div >
  );
}

export default App;
