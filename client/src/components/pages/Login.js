import React, { Fragment, useState} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if loged in
  if(isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Login</h1>
      <p className='lead'><i className='fas fa-user'></i>Login to NUMUG Account</p>
      <form className='form' onSubmit={e => onSubmit(e)}>
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Fragment>
  )
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
