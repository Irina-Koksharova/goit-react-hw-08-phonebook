import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.items;
const getFilter = state => state.filter;
const getIsLoading = state => state.isLoading;
const getError = state => state.error;

const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
});

export { getContacts, getFilter, getIsLoading, getError, getVisibleContacts };
