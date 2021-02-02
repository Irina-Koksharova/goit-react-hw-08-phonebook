import axios from 'axios';
import {
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
} from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch ({ message }) {
    dispatch(fetchContactsError(message));
  }
};

const addContact = (name, number, email, skype, telegram, group) => async dispatch => {
  const contact = {
    name,
    number,
    email,
    skype,
    telegram,
    group,
  };
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch ({ message }) {
    dispatch(addContactError(message));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch ({ message }) {
    dispatch(deleteContactError(message));
  }
};

const updateContact = (id, name, number, email, skype, telegram, group) => async dispatch => {
  const updatedContact = { name, number, email, skype, telegram, group };
  dispatch(updateContactRequest());
  try {
    const { data } = await axios.patch(`/contacts/${id}`, updatedContact);
    dispatch(updateContactSuccess(data));
  } catch ({ message }) {
    dispatch(updateContactError(message));
  }
};

export { fetchContacts, addContact, deleteContact, updateContact };
