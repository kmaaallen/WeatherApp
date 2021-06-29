import './App.css';
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import CurrentWeather from './components/CurrentWeather';
//Backgrounds
import Atmosphere from './images/Atmosphere.jpg';
import Clouds from './images/Clouds.jpg';
import Rain from './images/Rain.jpg';
import Snow from './images/Snow.jpg';
import Clear from './images/Clear.jpg';
import Thunderstorm from './images/Thunderstorm.jpg';
import Drizzle from './images/Drizzle.jpg';


function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [data, setData] = useState([]);
  const [background, setBackground] = useState([]);

  const firstCall = useRef(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
  }, []);

  useLayoutEffect(() => {
    const atmosphere = ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado'];
    if (firstCall.current) {
      firstCall.current = false;
      return;
    } else if (latitude !== '' && longitude !== '') {
      fetch(`/api/weather/${latitude}/${longitude}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.data);

          if (atmosphere.includes(data.data.weather[0].main)) setBackground(Atmosphere);
          if (data.data.weather[0].main === 'Clouds') setBackground(Clouds);
          if (data.data.weather[0].main === 'Rain') setBackground(Rain);
          if (data.data.weather[0].main === 'Snow') setBackground(Snow);
          if (data.data.weather[0].main === 'Drizzle') setBackground(Drizzle);
          if (data.data.weather[0].main === 'Thunderstorm') setBackground(Thunderstorm);
          if (data.data.weather[0].main === 'Clear') setBackground(Clear);

          console.log(data);
        });
    }
  }, [latitude, longitude]);


  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <CurrentWeather data={data} />
    </div>
  );
}

export default App;
