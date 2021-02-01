import axios from 'axios';
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  logInUserRequest,
  logInUserSuccess,
  logInUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const registerUser = userData => async dispatch => {
  dispatch(registerUserRequest());
  try {
    const { data } = await axios.post('/users/signup', userData);
    dispatch(registerUserSuccess(data));
  } catch ({ message }) {
    dispatch(registerUserError(message));
  }
};

const logInUser = userData => async dispatch => {
  dispatch(logInUserRequest());
  try {
    const { data } = await axios.post('/users/login', userData);
    dispatch(logInUserSuccess(data));
  } catch ({ message }) {
    dispatch(logInUserError(message));
  }
};

export { registerUser, logInUser };
