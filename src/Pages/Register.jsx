import React, { useState } from 'react'
import "./CSS/Register.css"
import { Link } from 'react-router-dom'


export default function Register(props) {
    const[email,setEmail]= useState('')
    const [password,setPassword] = useState('')
    const [name,setName]= useState('')
    const [userName , setUserName] = useState('')
    const [tele,setTele]= useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name,userName,email,password,tele);
    }
  return (
    <>
    <div className="regi-form">
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} placeholder='Full Name' onChange={(e)=>{setName(e.target.value)}} />
            
            <label htmlFor="username">User Name</label>
            <input type="text" value={userName} placeholder='UserName' onChange={(e)=>{setUserName(e.target.value)}} />
            
            <label htmlFor="email">Email</label>
            <input type="email" value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
            
            <label htmlFor="password">Password</label>
            <input type="password" value={password} placeholder='Email' onChange={(e)=>{setPassword(e.target.value)}} />
            
            <label htmlFor="tele">Phone Number</label>
            <input type="number" value={tele} placeholder='Your Nubmer' onChange={(e)=>{setTele(e.target.value)}} />

            <button id="sub" type='submit'>Register</button>
        </form>
        <h5>Already have Account</h5>
        <button id="reg"><Link to='/Log-in' style={{color:'black',textDecoration:'none'}}>Sing In</Link></button>

    </div>
    </>
  )
}
