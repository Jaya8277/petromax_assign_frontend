import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <div className='animate__animated animate__bounce' id="nav">
        <h1>PetroMax</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Work</li>
                <li>Blog </li>
                <li>Contact</li>
                
            </ul>
            <button className='btn'>Free Consultation</button>
            <Link to="/admin"><button>Admin Panel</button></Link>
        </div>
    </div>
  )
}

export default Navbar
