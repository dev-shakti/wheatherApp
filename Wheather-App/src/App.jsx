import react, { useEffect, useState } from 'react'
import WheatherData from "./WeatherData"
import "./app.css"

function App() {

  const [search, setSearch] = useState("Delhi")
  const [city, setCity] = useState()


  console.log(search)

  //const url="https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a42b484dc5bc7ffd982c90027f092710"


  const fetchApi = async () => {
    try {
      
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a42b484dc5bc7ffd982c90027f092710`)
      const data = await response.json();
      setCity(data.main);
      console.log(data.main)
    } catch (error) {
     
      console.log("Error is" + error)
    }

  }


  useEffect(() => {
    fetchApi();
  }, [search])



  return (
    <>
      <div className='container'>
        <div className='box'>
          <div className='top'>
            <input type="search"
              placeholder='Enter Your City'
              className='searchInput'
              value={search}
              onChange={(e) => setSearch(e.target.value)} />
          </div>

          {
            !city ? (
              <p>No City found !</p>
            ) : <WheatherData city={city} search={search}/>
          }


        </div>
      </div>
    </>
  )
}

export default App
