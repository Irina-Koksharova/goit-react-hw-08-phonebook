import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContactsRequest = createAction('fetchContactsRequest');
const fetchContactsSuccess = createAction('fetchContactsSuccess');
const fetchContactsError = createAction('fetchContactsError');

const addContactRequest = createAction('addContactRequest');
const addContactSuccess = createAction('addContactSuccess');
const addContactError = createAction('addContactError');

const deleteContactRequest = createAction('deleteContactRequest');
const deleteContactSuccess = createAction('deleteContactSuccess');
const deleteContactError = createAction('deleteContactError');

const updateContactRequest = createAction('updateContactRequest');
const updateContactSuccess = createAction('updateContactSuccess');
const updateContactError = createAction('updateContactError');

const changeFilter = createAction('changeFilter');

export {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
  changeFilter,
};
