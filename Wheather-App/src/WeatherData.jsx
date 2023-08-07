import React from 'react'
const WeatherData = ({city,search}) => {
    console.log(city)
  return (
    <>
      <div className='center'>
                  <h1>{city.temp}℃</h1>
                  <p>{search}</p>
                </div>
                <div className='bottom'>
                  <div className='feels'>
                    <p>{city.feels_like}℃</p>
                    <p>Feels</p>
                  </div>
                  <div className='humidity'>
                    <p>{city.humidity}%</p>
                    <p>Humidity</p>
                  </div>
                  <div className='pressure'>
                    <p>{city.pressure}KMH</p>
                    <p>Pressure</p>
                  </div>
            </div>
            <div className='showtime'>
                    <span>{new Date().toLocaleTimeString()}</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
    </>
  )
}

export default WeatherData
