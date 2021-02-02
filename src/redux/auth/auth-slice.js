import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logInUser, logOutUser, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [registerUser.rejected](state, { error }) {
      state.isLoading = false;
      state.error = error.message;
    },
    [logInUser.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [logInUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [logInUser.rejected](state, { error }) {
      state.isLoading = false;
      state.error = error.message;
    },
    [logOutUser.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [logOutUser.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [logOutUser.rejected](state, { error }) {
      state.isLoading = false;
      state.error = error.message;
    },
    [fetchCurrentUser.pending](state, _) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state, _) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export { authSlice };
