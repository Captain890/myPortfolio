import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Gaurav</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Projects</li>
                </ul>
            </div>
            <button className="button n-button">Contact</button>
        </div>
    </div>
  )
}

export default Navbar