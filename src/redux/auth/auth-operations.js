import axios from 'axios';
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  logInUserRequest,
  logInUserSuccess,
  logInUserError,
  logOutUserRequest,
  logOutUserSuccess,
  logOutUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = userData => async dispatch => {
  dispatch(registerUserRequest());
  try {
    const { data } = await axios.post('/users/signup', userData);
    token.set(data.token);
    dispatch(registerUserSuccess(data));
  } catch ({ message }) {
    dispatch(registerUserError(message));
  }
};

const logInUser = userData => async dispatch => {
  dispatch(logInUserRequest());
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);
    dispatch(logInUserSuccess(data));
  } catch ({ message }) {
    dispatch(logInUserError(message));
  }
};

const logOutUser = () => async dispatch => {
  dispatch(logOutUserRequest());
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    dispatch(logOutUserSuccess(data));
  } catch ({ message }) {
    dispatch(logOutUserError(message));
  }
};

export { registerUser, logInUser, logOutUser };
