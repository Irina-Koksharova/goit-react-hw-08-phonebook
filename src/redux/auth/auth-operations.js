import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../axios-defaults';

const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.set(data.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  },
);

const logInUser = createAsyncThunk(
  'auth/logInUser',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      token.set(data.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  },
);

const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout');
      token.unset();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const persistedToken = getState().auth.token;
    if (persistedToken === null) {
      return rejectWithValue(null);
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  },
);

const operations = {
  registerUser,
  logInUser,
  logOutUser,
  fetchCurrentUser,
};

export default operations;
