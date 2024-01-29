import React from 'react'
import Popular from '../Components/Popular/Popular'
import Home from '../Components/Home/Home' 
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollections/NewCollection'
import NewLetter from '../Components/NewsLetter/NewLetter'
import Navbar2 from '../Components/Navbar2/Navbar2'


export default function Shop() {
  return (
    <div>
      <Navbar2/>
      <Home/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewLetter/>
    </div>
  )
}
