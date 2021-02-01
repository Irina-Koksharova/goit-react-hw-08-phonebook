import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  logInUserRequest,
  logInUserSuccess,
  logInUserError,
} from './auth-actions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const userReducer = createReducer(
  {},
  {
    [registerUserSuccess]: (_, { payload }) => ({
      name: payload.user.name,
      email: payload.user.email,
      token: payload.token,
      isLoggedIn: true,
    }),
    [logInUserSuccess]: (_, { payload }) => ({
      name: payload.user.name,
      email: payload.user.email,
      token: payload.token,
      isLoggedIn: true,
    }),
  },
);

const loadingReducer = createReducer(false, {
  [registerUserRequest]: () => true,
  [registerUserSuccess]: () => false,
  [registerUserError]: () => false,
  [logInUserRequest]: () => true,
  [logInUserSuccess]: () => false,
  [logInUserError]: () => false,
});

const errorReducer = createReducer(null, {
  [registerUserError]: (_, { payload }) => payload,
  [logInUserError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user: userReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});

export { authReducer };
