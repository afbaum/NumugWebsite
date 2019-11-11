import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

import PropTypes from 'prop-types';


const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if(password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'><i className='fas fa-user'></i>Register an Account</p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="name"
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required />
        </div>
        <div className="form-group">
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required />
        </div>
        <div className="form-group">
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={e => onChange(e)}
            required />
        </div>
        <div className="form-group">
          <input
            type='password'
            placeholder='Password'
            name='password2'
            minLength='6'
            value={password2}
            onChange={e => onChange(e)}
            required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </Fragment>
  )
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired

}

export default connect(null, { setAlert, register })(Register);
