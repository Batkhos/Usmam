import React from 'react'
import './CSS/About.css'
import logoexp from '../Components/Assest/logoexp.jpg'
import green from '../Components/Assest/green.jpg'
import white from '../Components/Assest/white.jpg'
import bus from '../Components/Assest/bus.jpg'


export default function About() {
  return (
    <div className='about'>
      <div className='logo-exp'>
      <h3> The New Logo of Ait Melloul FootBall Club</h3>
        <img src={logoexp} alt="" />
      </div>
      <div className='first-des'>
            <div className='des-text'>
                <h2>U.S.M.A.M</h2>
                <p>نقدم لكم قميص اليوزمام الإحتياطي للموسم الجديد 2023/2024 🤩⚪️</p>
            </div>
            <div className='image'>
            <img src={green} alt="" />
            <img src={white} alt="" />
            </div>
        </div>
        <div className='bus'>
        <p>حافلة فريق إتحاد ايت ملول لكرة القدم </p>
          <img src={bus} alt="" />
        </div>
    </div>
  )
}
