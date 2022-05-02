
import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import DayForcast from './DayForcast'

function App() {
  const [start, setStart] = useState(false);
  const [weather, setWeather] = useState('');
  const [high, setHigh] =useState();
  const [low, setLow] = useState();
  let dayArr = ["Mon", "Tue", "Wed", "Thu", "Fri",];
  let lat = 33.44;
  let lon = -94.04;
  let key = 'ae523b93fc9c3d4dfabaa445f6b909a8';
  let apiCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&lang=en&appid=${key}`;

  const getWeather = () => {
    console.log(apiCall);
    console.log(start);
    fetch(apiCall)
    .then(response => response.json())
    .then(data => displayWeather(data));
    
  }

  function displayWeather(data) {
    console.log(`Data: ${data}`);
    setHigh(data.daily[0].temp.max.toFixed(0));
    setLow(data.daily[0].temp.min.toFixed(0));
    setWeather(data);
    console.log(`Weather: ${weather}`)
    setStart(true);

  }


  return (
    <div className="App">
      {!start ? <button onClick={getWeather}>Get Weather</button> : ''}
      <div className="forcast-container">
      {start ? dayArr.map((day, index) => {
        return <DayForcast day={day} key={index} high={weather.daily[index].temp.max.toFixed(0)} low={weather.daily[index].temp.min.toFixed(0)} icon={weather.daily[index].weather[0].icon} />
      }) : ''}
      </div>
    </div>
  );
}

export default App;
