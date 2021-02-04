import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactsList.module.css';
import { deleteContact } from '../../redux/contacts/contacts-operation';
import { contactsSlice } from '../../redux/contacts/contacts-slice';
import {
  getVisibleContacts,
  getFilter,
} from '../../redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem/ContactItem';

const ContactsList = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const contacts = useSelector(getVisibleContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const onDelete = id => {
    dispatch(deleteContact(id));
    if (filter !== '') {
      dispatch(contactsSlice.actions.changeFilter(''));
    }
  };

  const onChange = id => {
    setSelectedContact(contacts.find(contact => contact.id === id));
  };

  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onChange={onChange}
            onDelete={onDelete}
          />
        ))}
    </ul>
  );
};

export default ContactsList;
