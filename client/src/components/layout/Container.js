import React from 'react';
import { Link } from 'react-router-dom';
import personImg from '../../images/person.jpg';
import deadlineImg from '../../images/deadline.jpg';
import anemometerImg from '../../images/anemometer.jpg';

const Container = () => {

  var style = {
    height: '200px',
    borderRadius: '2%'
  }

  return (

    <div>
      <div class="container-fluid padding py-4">
        <div className='row'>
          <div className='col-sm'>
            <div className='card'>
              <img style = {style} src={personImg}  alt='person holding large lightbulb'></img>
              <div className='card-title text-center'>
                <h2>Join the Confrence</h2>
              </div>
              <div className='card-body'>
                <h4 className='text-center'>NUMUG 2018 Annual Confrence in Las Vagas Navada October 17-19</h4>
                <br/>
                <Link to='/' className='btn btn-primary btn-block'>More</Link>
              </div>
            </div>
          </div>
          <div className='col-sm'>
            <div className='card'>
              <img style = {style} src={deadlineImg} alt='person holding large lightbulb'></img>
              <div className='card-title text-center'>
                <h2>Call for Papers</h2>
              </div>
              <div className='card-body'>
                <h4 className='text-center'>For submition deadlines click below</h4>
                <br/>
                <Link to='/' className='btn btn-primary btn-block'>Deadlines</Link>
              </div>
            </div>
          </div>
          <div className='col-sm'>
            <div className='card'>
              <img style = {style} src={anemometerImg} alt='person holding large lightbulb'></img>
              <div className='card-title text-center'>
                <h2 className='text-center'>NUMUG Information Archive</h2>
              </div>
              <div className='card-body text-center'>
                <h4>For more information about NUMUG Click below</h4>
                <br/>
                <Link to='/' className='btn btn-primary btn-block'>More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Container;
