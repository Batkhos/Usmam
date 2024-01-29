import React from 'react'
import './CSS/Blog.css'
import coverbanner from '../Components/Assest/coverbanner.jpg'
import backnick from '../Components/Assest/backnick.jpg'
import test1 from '../Components/Assest/test1.jpg'
import twogirla from '../Components/Assest/twogirla.jpg'

export default function Blog() {
  return (
    <div className='blog'>
      <img src={coverbanner} alt="" />
      <div className='tamazight'>
        <img src={backnick} alt="" />
        <h1>ⵓⵣⵎⴰⵎ</h1>
        <p>This TIFINAGH Litter means Usmam the name of our club. which make our club is near to Amazighen culture. That made us prod of our Amazighen original</p>
      </div>
      <div className='tamazight'>
        <img src={test1} alt="" />
        <h1 id='imz2'>Jersys of 2023/2024</h1>
        <p id='imz22'>We have three kind of colors of t-shirts this year the Red color is the base at home</p>
      </div>
      <div className='tamazight'>
        <img src={twogirla} alt="" />
        <h1>ⵓⵣⵎⴰⵎ</h1>
        <p>This TIFINAGH Litter means Usmam the name of our club. which make our club is near to Amazighen culture. That made us prod of our Amazighen original</p>
      </div>
    </div>
  )
}
