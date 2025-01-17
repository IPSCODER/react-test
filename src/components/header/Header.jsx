import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <ul>
            <li><Link to={"/"} >Home</Link></li>
            <li><Link to={"/about"} >About</Link></li>
            <li><Link to={"/contact"} >Contact</Link></li>
            <li><Link to={"/assets"} >Assets</Link></li>
        </ul>
    </header>
  )
}

export default Header