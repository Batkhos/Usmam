import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar1.css' 
import usmamLogo from '../Assest/usmamLogo.jpg'
import { ShopContext } from '../../Context/ShopContext'

export default function Navbar1() {
  const [menu , setMenu] = useState()
  // const [categ , setCateg] = useState([])
  const {CartItemsList} = useContext(ShopContext)

  return (
    <>
    <div className='navbar'>
        <img src={usmamLogo} alt="" />
        <ul>
            <li><Link onClick={()=>setMenu('home')} style={{color:"white" ,textDecoration:"none"}} to='/'>Home{ menu === 'home' ? <hr className='nav'/> : <></> }</Link></li>
            <li><Link onClick={()=>setMenu('about')} style={{color:"white",textDecoration:"none"}} to='/About'> About { menu === 'about' ? <hr className='nav'/> : <></> } </Link></li>
            <li><Link onClick={()=>setMenu('shop')} style={{color:"white",textDecoration:"none"}} to='/Shop'>Shop { menu === 'shop' ? <hr className='nav'/> : <></> }</Link></li>
            <li><Link onClick={()=>setMenu('blog')} style={{color:"white",textDecoration:"none"}} to='/Blog'>Blog { menu === 'blog' ? <hr className='nav'/> : <></> }</Link></li>
        </ul>
        <div className='btn'>
        <button className='singup'><Link onClick={()=>setMenu('')} style={{color:"black",textDecoration:"none"}} to='/Sing-Up'>Sing Up</Link></button>
        <button className='login'><Link onClick={()=>setMenu('')} style={{color:"black",textDecoration:"none"}} to='/Log-In'>Log In</Link></button>
        <Link to='cart'><i onClick={()=>{setMenu('cart')}} class="fa-solid fa-cart-shopping"></i></Link> 
        <div className="num">{CartItemsList()}</div>    
        </div>
    </div>
    {/* <div className='second-nav'>
      <ul>
      <li><Link onClick={()=>setCateg('all')}  style={{color:"black",textDecoration:"none"}} to='/Shop'>All{categ === 'all' ? <hr/> : <></>}</Link></li>
      <li><Link onClick={()=>setCateg('men')}  style={{color:"black",textDecoration:"none"}} to='/Men'>Men{categ === 'men' ? <hr/> : <></>}</Link></li>
      <li><Link onClick={()=>setCateg('women')} style={{color:"black",textDecoration:"none"}} to='/Women'>Women{categ === 'women' ? <hr/> : <></>}</Link></li>
      <li><Link onClick={()=>setCateg('kids')} style={{color:"black",textDecoration:"none"}} to='/Kids'>Kids{categ === 'kids' ? <hr/> : <></>}</Link></li>
      </ul>
    </div> */}
    </>
  )
}
