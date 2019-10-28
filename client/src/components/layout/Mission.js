import React from 'react';
import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <div>
      <div>
        <div className="container-fluid padding">
          <div className="row welcome text-center">
            <div className="col-12">
              <h5 className='display-4'>NUMUG Mission</h5>
            </div>
            <hr/>
            <div className="col-12">
              <p className="lead"> Providing a forum to address problems and exchange ideas for those
              collecting and utilizing meteorological data at nuclear facilities.  Membership is open
              to any individual interested in pursuing the mission and objectives of the group.  </p>
            </div>
          </div>
        </div>
        <hr className="my-4"/>
      </div>
      <div className='container'>
        <Link to='register' type="button" className="btn btn-info btn-lg btn-block">Join Now!</Link>

      </div>
    </div>
  )
};

export default Mission;
