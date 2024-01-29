import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/Login.css'


export default function Logging(props) {
    const[email,setEmail]= useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email, password);
    }
  return (
    <>
    <div className="form-cont">
        <form onSubmit={handleSubmit} >
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>{ setEmail(e.target.value)}} />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Your Passsword' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button id='sub' type='submit'>Log In</button>
        </form>
        <h5>Don't have Account</h5>
        <button id='reg'><Link to='/Sing-Up' style={{color:'black',textDecoration:'none'}}>Register Here</Link></button>
    </div>

    </>
  )
}
