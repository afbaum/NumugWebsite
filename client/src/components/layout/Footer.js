import React from 'react';

const Footer = () => {
  return (
      <footer>
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-md-6">
              <hr className="light"/>
              <h5>Webmaster</h5>
              <hr className="light"/>
              <p>Amanda Gray-Baum Au.D</p>
            </div>
            <div className="col-md-6">
              <hr className="light"/>
              <h5>Last Update</h5>
              <hr className="light"/>
              <p>02 May 2018</p>
            </div>
            <div className="col-12">
              <hr className="light"/>
              <h5>&copy; afbaum.inc</h5>
            </div>
          </div>
        </div>
      </footer>
  )
};

export default Footer;
