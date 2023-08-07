import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


const NavBar = () => {



  return (
    <div className='nav_main'>
      <h1 className='nav_title'>Pauline Cumming</h1>
      <ul className='nav_link-container'>
        <Link to='/' className='nav_list-item'><li>Home</li></Link>
        <Link to='/shop' className='nav_list-item'><li>Shop</li></Link>
        <Link to='/gallery' className='nav_list-item'><li>Gallery</li></Link>
        <Link to='/contact' className='nav_list-item'><li>Contact</li></Link>
      </ul>
    </div>
  );
}

export default NavBar;