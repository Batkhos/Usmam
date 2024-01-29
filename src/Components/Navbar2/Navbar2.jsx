import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Navbar2/Navbar2.css'

export default function Navbar2() {
    const [categ , setCateg] = useState('all')
  return (
    <div className='second-nav'>
        <ul>
            <li><Link onClick={()=>setCateg('all')}  style={{color:"black",textDecoration:"none"}} to='/shop'>All{categ === 'all' ? <hr className='nav2'/> : <></>}</Link></li>
            <li><Link onClick={()=>setCateg('men')}  style={{color:"black",textDecoration:"none"}} to='/men'>Men{categ === 'men' ? <hr className='nav2'/> : <></>}</Link></li>
            <li><Link onClick={()=>setCateg('women')} style={{color:"black",textDecoration:"none"}} to='/women'>Women{categ === 'women' ? <hr className='nav2'/> : <></>}</Link></li>
            <li><Link onClick={()=>setCateg('kids')} style={{color:"black",textDecoration:"none"}} to='/kids'>Kids{categ === 'kids' ? <hr className='nav2'/> : <></>}</Link></li>
        </ul>
    </div>  )
}
