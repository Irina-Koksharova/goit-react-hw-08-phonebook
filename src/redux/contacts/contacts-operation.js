import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
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
      return rejectWithValue(response.status);
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
      return rejectWithValue(response.status);
    }
  },
);

const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (data, thunkAPI) => {
    const { id, name, number } = data;
    const update = { name, number };
    try {
      const action = await axios.patch(`/contacts/${id}`, update);
      return action.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.status);
    }
  },
);

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
};

export default contactsOperations;
