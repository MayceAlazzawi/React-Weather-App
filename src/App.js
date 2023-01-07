import './App.css';
import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/sea-green';

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
      // https:/  /pro.openweathermap.org/data/2.5/forecast/hourly?lat=44.34&lon=10.99&appid={API key}
      // Fetch weather data from weather api based on our latitude and longitude
      // https://api.openweathermap.org/data/2.5/forecast?
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=f37b157d4e4a55815a943abd53f0d644`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });

    }
    fetchData();
  }, [lat, long]);
  console.log(data)
  return (
    <div className="App">
      <div className=' title'><h1>Hourly Weather App</h1></div>
      {(typeof data.list !== "undefined") ?
        (<Splide aria-labelledby="My Favorite Images" options={{ rewind: true, width: "1600", gap: "1", display: "flex" }}>
          <SplideSlide> <Weather weatherData={data.list[0]} city={data.city.name} /></SplideSlide>
          <SplideSlide> <Weather weatherData={data.list[1]} city={data.city.name} /></SplideSlide>
          <SplideSlide> <Weather weatherData={data.list[2]} city={data.city.name} /></SplideSlide>
          <SplideSlide> <Weather weatherData={data.list[3]} city={data.city.name} /></SplideSlide>
          <SplideSlide> <Weather weatherData={data.list[4]} city={data.city.name} /></SplideSlide>
        </Splide>
          // <Splide aria-labelledby="My Favorite Images" options={{
          //   rewind: true,
          //   width: 1400,
          //   gap: '1rem',
          //   display: "flex",
          //   // flex-direction: "row"
          // }}>
          //   <SplideSlide>
          //     <SplideSlide>
          //       <Weather weatherData={data.list[0]} />
          //       <Weather weatherData={data.list[0]} city={data.city.name} />
          //       <Weather weatherData={data.list[1]} city={data.city.name} />
          //       <Weather weatherData={data.list[2]} city={data.city.name} />
          //     </SplideSlide>
          //   </SplideSlide>
          //   <SplideSlide>
          //     <Weather weatherData={data.list[3]} city={data.city.name} />
          //     <Weather weatherData={data.list[4]} city={data.city.name} />
          //     <Weather weatherData={data.list[5]} city={data.city.name} />
          //   </SplideSlide>
          // </Splide >
        ) : (
          <div>Loading...</div>
        )
      }
    </div >
  );
}

export default App;
