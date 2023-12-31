import React, { useState} from 'react';
import axios from 'axios';
import Marquee from 'react-fast-marquee';



function App() {
  const[data, setData] = useState('')
  const[location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
  
  const searchLocation = (event) =>{
    if(event.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        
      })
      setLocation("")
    }
    }
    
    

  return (
    <div className="App">
      <div className='search'> 
       <div className='caption'>
        <h2>Weather App</h2>
         <p className='info'>Check the weather of your location</p>
         </div>
        <input
        type='text'
        value={location}
        onChange={event=>setLocation(event.target.value)}
        placeholder='Enter Location'
        onKeyDown = {searchLocation} 
        />
      </div>
      <div className="container">
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp" >
          {data.main? <h1> {data.main.temp.toFixed()} <sup>o</sup>C </h1> : null}
        </div>
        <div className='description'>
          {data.weather? <p> {data.weather[0].main} </p> : null}
        </div>
      </div>
      {data.name !== undefined &&
      <div className="bottom">
      <div className='feels' >
        {data.main? <p className='bold'>{data.main.feels_like.toFixed()} <sup>o</sup>C</p> : null}
        <p>Feels like</p>
      </div>
      <div className='humidity' >
      {data.main? <p className='bold'>{data.main.humidity}%</p> : null}
        <p>Humidity</p>
      </div>
      <div className='wind' >
      {data.main? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
          <p>Wind Speed</p>
      </div>
    </div>
      }
      <footer>
        <Marquee><strong>Stay ahead of the forecast with CWA ☀️🌧️❄️</strong></Marquee>
      </footer>
      </div>
    </div>
  );
}

export default App;
