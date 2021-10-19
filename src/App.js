import './App.css';
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
//Components
import SearchWeather from './components/SearchWeather';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
//Backgrounds
import Atmosphere from './images/Atmosphere.jpg';
import Clouds from './images/Clouds.jpg';
import Rain from './images/Rain.jpg';
import Snow from './images/Snow.jpg';
import Clear from './images/Clear.jpg';
import Thunderstorm from './images/Thunderstorm.jpg';
import Drizzle from './images/Drizzle.jpg';
import Night from './images/Night.jpg';
//Material ui
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

//TODO: Error catching

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [data, setData] = useState([]);
  const [background, setBackground] = useState('');
  const [location, setLocation] = useState(false);

  const firstCall = useRef(true);

  function myCallBack(cityData) {
    setData(cityData);
  };

  useLayoutEffect(() => {
    if (data.length === 0) {
      setBackground('');
      return;
    } else {
      if ((data.weatherNow.weather[0].icon).includes("n")) {
        setBackground(Night);
      } else {
        const atmosphere = ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado'];
        if (atmosphere.includes(data.weatherNow.weather[0].main)) setBackground(Atmosphere);
        if (data.weatherNow.weather[0].main === 'Clouds') setBackground(Clouds);
        if (data.weatherNow.weather[0].main === 'Rain') setBackground(Rain);
        if (data.weatherNow.weather[0].main === 'Snow') setBackground(Snow);
        if (data.weatherNow.weather[0].main === 'Drizzle') setBackground(Drizzle);
        if (data.weatherNow.weather[0].main === 'Thunderstorm') setBackground(Thunderstorm);
        if (data.weatherNow.weather[0].main === 'Clear') setBackground(Clear);
      }
    }
  }, [data])

  useEffect(() => {
    document.title = 'Weather App, search and display weather';
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
        setLocation(true);
      });
    } else {
      setLocation(false);
    }
  }, []);

  useLayoutEffect(() => {
    if (firstCall.current) {
      firstCall.current = false;
      return;
    } else if (latitude !== '' && longitude !== '') {
      fetch(`/api/weather/${latitude}/${longitude}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [latitude, longitude]);


  return (
    <div className="App" role="main">
      <div style={{ display: 'flex', color: 'white' }}>
        <Typography variant="h5" component="h1" style={{ padding: '25px 15px', textAlign: 'left', width: '50%' }}>Weather App</Typography>
        <SearchWeather callBackFromParent={myCallBack} />
      </div>
      {typeof data.weatherNow != 'undefined' ?
        <Grid container>
          <Grid item xs={6}>
            <CurrentWeather data={data.weatherNow} background={background} />
          </Grid>
          <Grid item xs={6}>
            <Forecast data={data.forecast} />
          </Grid>
        </Grid>
        : (<div>
          <div style={{ color: 'white', marginTop: '15px' }}>{location ? 'Loading' : 'Please share your location to see local weather, or use the search bar'}</div>
          {location ? <CircularProgress /> : null}
        </div>)}

    </div>
  );
}

export default App;