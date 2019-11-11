import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from './types';

// Register user
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(errors => dispatch(setAlert(err.mag, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
}

// Login user
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(errors => dispatch(setAlert(err.mag, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// logout / clear profile
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT});
}
