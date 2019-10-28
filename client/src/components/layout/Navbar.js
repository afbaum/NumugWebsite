import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarList">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarList">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-link">Confrence</Link>
            </li>
            <li className="nav-item">
              <Link to='/register' className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-link">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar
