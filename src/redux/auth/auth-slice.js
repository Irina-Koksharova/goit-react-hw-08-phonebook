import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const {
  registerUser,
  logInUser,
  logOutUser,
  fetchCurrentUser,
} = authOperations;

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
    [registerUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
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
    [logInUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
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
    [logOutUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [fetchCurrentUser.pending](state, _) {
      state.isFetchingCurrentUser = true;
      state.error = null;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.error = null;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.isFetchingCurrentUser = false;
      state.error = payload;
    },
  },
});

export default authSlice;
