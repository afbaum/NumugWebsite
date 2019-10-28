import React, { Fragment, useState } from 'react';
import Textbox from '../layout/Textbox';


const Register = () => {
  const [formData, setFormData] = useState();

  

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'><i className='fas fa-user'></i>Register an Account</p>
      <form>
        <div className="form-group">
          <input type="name" placeholder='Name' name='name' required />
        </div>
        <div className="form-group">
          <input type='email' placeholder='Email Address' name='email' />
        </div>
        <div className="form-group">
          <input type='password' placeholder='Password' name='password' minLength='6' />
        </div>
        <div className="form-group">
          <input type='password2' placeholder='Password' name='password2' minLength='6' />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </Fragment>
  )
};

export default Register;
