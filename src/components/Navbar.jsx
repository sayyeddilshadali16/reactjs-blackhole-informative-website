import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <p className='logo'>SpaceInfo</p>
        <ul className='navLinks'>
          <NavLink
            className='routeLink active'
            to='/'
            style={({ isActive }) => ({
              color: isActive ? 'rgb(255, 3, 255)' : 'white',
              fontWeight: isActive ? '600' : '300'
            })} >Overview</NavLink>
          <NavLink
            className='routeLink'
            to='/data'
            style={({ isActive }) => ({
              color: isActive ? 'rgb(255, 3, 255)' : 'white',
              fontWeight: isActive ? '600' : '300'
            })} >Data</NavLink>
          <NavLink
            className='routeLink'
            to='/resource'
            style={({ isActive }) => ({
              color: isActive ? 'rgb(255, 3, 255)' : 'white',
              fontWeight: isActive ? '600' : '300'
            })} >Resource</NavLink>
          <NavLink
            className='routeLink'
            to='/theuniverse'
            style={({ isActive }) => ({
              color: isActive ? 'rgb(255, 3, 255)' : 'white',
              fontWeight: isActive ? '600' : '300'
            })} >The Universe</NavLink>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;