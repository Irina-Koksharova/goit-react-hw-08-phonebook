import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { token } from '../axios-defaults';

const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
);

export { getContacts };
