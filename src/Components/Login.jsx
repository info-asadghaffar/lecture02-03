import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({userName,password})
        console.log(userName,password)
    }
  return (
    <div>

        <p><input type="text" placeholder='UserName' onChange={(e)=>{setUserName(e.target.value)}} /></p>
        <p><input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} /></p>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login