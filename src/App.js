import react, { use } from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";

function App(){
  const [country,setCountry] = useState("")
  const [region,setRegion] = useState("")
  const [cityName,setCityName] = useState("City")
  const [temp,setTemp] = useState("0")
  const getWeather = (e) =>{
    setCityName(e.target.value)
  }
  function Weather(e){
    e.preventDefault()
    axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`)
    .then((res)=>{
      console.log(res)
      setTemp(res.data.current.temp_c)
      setRegion(res.data.location.region)
      setCountry(res.data.location.country)
    }).catch((err)=>{
      console.log(err.message)
      alert(err.message)
    })
  }
  return(
    <div className="App">
      <h1>Weather App And API Fetching</h1>
      <form onSubmit={Weather}>
        <p><input type="text" placeholder="Enter City Name"onChange={getWeather}/></p>
        <button type="submit">Click ME</button>
      </form>
      <h4>Temperuture : {temp} Celcius</h4>
      <h4>City Name : {cityName} ({region})</h4>
      <h4>Country : {country} </h4>
    </div>
  )
}

export default App;