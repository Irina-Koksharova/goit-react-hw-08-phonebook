import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operation';

const {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} = contactsOperations;

const initialState = {
  items: [],
  filter: '',
  isSelected: null,
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
    editContact: (state, { payload }) => {
      state.isSelected = payload;
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
      state.isSelected = null;
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [updateContact.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [updateContact.fulfilled](state, { payload }) {
      state.items = state.items.map(item =>
        item.id === payload.id ? payload : item,
      );
      state.isLoading = false;
      state.error = null;
    },
    [updateContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default contactsSlice;
