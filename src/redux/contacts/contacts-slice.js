import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from './contacts-operation';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [getContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
    },
    [getContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export { contactsSlice };
