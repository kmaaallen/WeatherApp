import './App.css';
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
//Components
import SearchWeather from './components/SearchWeather';
import CurrentWeather from './components/CurrentWeather';
import Background from './components/Background';
//Backgrounds
import Atmosphere from './images/Atmosphere.jpg';
import Clouds from './images/Clouds.jpg';
import Rain from './images/Rain.jpg';
import Snow from './images/Snow.jpg';
import Clear from './images/Clear.jpg';
import Thunderstorm from './images/Thunderstorm.jpg';
import Drizzle from './images/Drizzle.jpg';

//TODO: Loading UI
//TODO: Error catching
//TODO: transition background smoother

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [data, setData] = useState([]);
  const [background, setBackground] = useState([]);

  const firstCall = useRef(true);

  function myCallBack(cityData) {
    setData(cityData);
  };

  useLayoutEffect(() => {
    if (data.length === 0) {
      return;
    } else {
      const atmosphere = ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado'];
      if (atmosphere.includes(data.weather[0].main)) setBackground(Atmosphere);
      if (data.weather[0].main === 'Clouds') setBackground(Clouds);
      if (data.weather[0].main === 'Rain') setBackground(Rain);
      if (data.weather[0].main === 'Snow') setBackground(Snow);
      if (data.weather[0].main === 'Drizzle') setBackground(Drizzle);
      if (data.weather[0].main === 'Thunderstorm') setBackground(Thunderstorm);
      if (data.weather[0].main === 'Clear') setBackground(Clear);
    }
  }, [data])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
  }, []);

  useLayoutEffect(() => {
    if (firstCall.current) {
      firstCall.current = false;
      return;
    } else if (latitude !== '' && longitude !== '') {
      fetch(`/api/weather/${latitude}/${longitude}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.data);
        });
    }
  }, [latitude, longitude]);

  return (
    //style={{ backgroundImage: `url(${background})` }}
    <div className="App" >
      <Background background={background} >
        <SearchWeather callBackFromParent={myCallBack} />
        <CurrentWeather data={data} />
      </Background>
    </div >
  );
}

export default App;
