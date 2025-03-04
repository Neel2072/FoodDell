import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({SetShowLogin}) => {
    const [menu , setMenu] = useState("Home")
    return (
        <div className='navbar'>
            <img src={assets?.logo}  className="logo " alt="" />
            <ul className="navbar_menu">
                <Link to={"/"} onClick={()=>setMenu("Home")} className={menu === "Home"?"active" : ""}>Home</Link>
                <a href='#explore_menu' onClick={()=>setMenu("Menu")} className={menu === "Menu"?"active" : ""}>Menu</a>
                <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu === "Mobile-App"?"active" : ""}>Mobile-App</a>
                <a href='#footer'  onClick={()=>setMenu("Contact Us")} className={menu === "Contact Us"?"active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar_right">
                <img src={assets?.search_icon} alt="" />
                <div className="navbar_search_icon">
                    <img src={assets?.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button onClick={()=>SetShowLogin(true)}>sign in</button>
            </div>

        </div>
    )
}

export default Navbar