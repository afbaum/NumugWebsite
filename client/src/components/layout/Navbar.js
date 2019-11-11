import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ( {auth: { isAuthenticated, loading}, logout}) => {
  const authLinks = (
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
              <Link to='/' className="nav-link">Documents</Link>
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-link">Forum</Link>
            </li>
              <button type='submit' className='btn btn-primary' onClick={logout}>Logout</button>
          </ul>
        </div>
      </div>
  );

  const guestLinks = (
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
              <Link to='/register' className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </div>
  );

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>
    </nav>
  )
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
