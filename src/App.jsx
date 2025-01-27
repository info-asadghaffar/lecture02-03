import React,{useState} from 'react'
import axios from 'axios'

function App() {

  const[city,setCity] = useState("")
  const[temperuture,setTemperuture] = useState("0")
  const [region,setRegion] = useState("")
  const[country,setCountry] = useState("")

  const Weather = (e) =>{
    e.preventDefault()
    axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`).then((res)=>{
      console.log(res.data.current.temp_c)
      setTemperuture(res.data.current.temp_c)
      setCountry(res.data.location.country)
      setRegion(res.data.location.region)
    })
    .catch((err)=>{
      console.log(err.message)
      alert(err.message)
    })
  }
  return (
    <div>
        <div className='flex items-center justify-center h-screen' >
        <div className='card w-70 h-auto p-5 rounded-md shadow-lg text-center'>
          <h1 className='font-medium bg-blue-950 text-white p-1 rounded'>WeatherApp and Api</h1>
          <p><input type="text" className='rounded bg-white border-cyan-500 px-1 py-1 w-60 my-1.5 border-2' placeholder='Enter City' onChange={(e)=>setCity(e.target.value)}/></p>
          <button onClick={Weather} className='bg-cyan-600  text-white w-60 py-1 rounded font-semibold'>GET Weather</button>
          <p className='bg-cyan-00 my-2 rounded p-1 text-black font-semibold shadow-sm' >Temperuture : {temperuture}</p>
          <p className='bg-cyan-00 my-2 rounded p-1 text-black font-semibold shadow-sm capitalize'>City : {city}</p>
          <p className='bg-cyan-00 my-2 rounded p-1 text-black font-semibold shadow-sm'>Region : {region}</p>
          <p className='bg-cyan-00 my-2 rounded p-1 text-black font-semibold shadow-sm'>Country : {country}</p>
        </div>
        </div>
    </div>
  )
}

export default App