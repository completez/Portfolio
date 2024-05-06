import React from 'react';
// import Menu from './Menu';
// import About from './About';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
        </div>
        <a href="" className="btn btn-ghost text-xl">Complete</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><Link to="/navbar">Navbar</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
          <li><a>Project</a></li>
          <li><a>Certificate</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://static-00.iconduck.com/assets.00/github-icon-512x499-ziwq0a1i.png" />
          </div>
        </div>
      </div>
    </div>
  );
}