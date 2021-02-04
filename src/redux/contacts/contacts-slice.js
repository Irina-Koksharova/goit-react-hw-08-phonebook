import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contacts-operation';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items = [...state.items, payload];
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled](state, { meta }) {
      state.items = state.items.filter(({ id }) => id !== meta.arg);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export { contactsSlice };
