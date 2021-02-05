import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getSelectedContact = state => state.contacts.isSelected;
const getAddFormCurrentStyle = state => state.contacts.addFormCurrentStyle;
const getEditFormCurrentStyle = state => state.contacts.editFormCurrentStyle;
const getIsLoading = state => state.contacts.isLoading;
const getError = state => state.contacts.error;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactsSelectors = {
  getContacts,
  getFilter,
  getSelectedContact,
  getAddFormCurrentStyle,
  getEditFormCurrentStyle,
  getIsLoading,
  getError,
  getVisibleContacts,
};

export default contactsSelectors;
