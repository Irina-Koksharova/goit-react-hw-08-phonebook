import { createAction } from '@reduxjs/toolkit';

const registerUserRequest = createAction('registerUserRequest');
const registerUserSuccess = createAction('registerUserSuccess');
const registerUserError = createAction('registerUserError');

const logInUserRequest = createAction('logInUserRequest');
const logInUserSuccess = createAction('logInUserSuccess');
const logInUserError = createAction('logInUserError');

export {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  logInUserRequest,
  logInUserSuccess,
  logInUserError,
};
