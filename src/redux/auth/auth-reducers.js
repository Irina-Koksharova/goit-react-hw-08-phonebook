import { createReducer, combineReducers } from '@reduxjs/toolkit';
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

const initialState = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
};

const userReducer = createReducer(initialState, {
  [registerUserSuccess]: (state, { payload }) => ({
    ...state,
    name: payload.user.name,
    email: payload.user.email,
    token: payload.token,
    isLoggedIn: true,
  }),
  [logInUserSuccess]: (state, { payload }) => ({
    ...state,
    name: payload.user.name,
    email: payload.user.email,
    token: payload.token,
    isLoggedIn: true,
  }),
  [logOutUserSuccess]: (state, _) => ({
    ...state,
    name: null,
    email: null,
    token: null,
    isLoggedIn: false,
  }),
});

const loadingReducer = createReducer(false, {
  [registerUserRequest]: () => true,
  [registerUserSuccess]: () => false,
  [registerUserError]: () => false,
  [logInUserRequest]: () => true,
  [logInUserSuccess]: () => false,
  [logInUserError]: () => false,
  [logOutUserRequest]: () => true,
  [logOutUserSuccess]: () => false,
  [logOutUserError]: () => false,
});

const errorReducer = createReducer(null, {
  [registerUserError]: (_, { payload }) => payload,
  [logInUserError]: (_, { payload }) => payload,
  [logOutUserError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user: userReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});

export { authReducer };
