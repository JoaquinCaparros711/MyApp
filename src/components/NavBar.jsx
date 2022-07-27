import React from 'react';
import { Link, NavLink } from "react-router-dom";
// import { HomePage } from './HomePage';


export const NavBar = () => {
  return (
    <nav className='nav'>

      <div>

          <ul className='container-a'>
            <Link className="name" to="/">JoaquínCaparros</Link>
            <NavLink className="nav-a" to="/">Home</NavLink>
            <NavLink className="nav-a" to="/about">About</NavLink>
            <a className="nav-a" href="#footer">Contact</a>
        </ul>

      </div>
    </nav>
  )
}
