import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { token } from '../axios-defaults';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contactData);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
);

export { fetchContacts, addContact, deleteContact };
