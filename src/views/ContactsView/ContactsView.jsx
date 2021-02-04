import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiUserAddLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import s from './ContactsView.module.css';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import {
  contactsNotify,
  contactsNotification,
} from '../../services/notification/notification';
import { getIsLoading } from '../../redux/auth/auth-selectors';
import { fetchContacts } from '../../redux/contacts/contacts-operation';
import { iconButtonForm } from '../../styles/iconButton';
import { contactsContainer } from '../../styles/container';
import { overlay, isShown } from '../../styles/overlay';
import Spinner from '../../components/Loader';
import Container from '../../components/Container';
import Filter from '../../components/Filter';
import ContactsList from '../../components/ContactsList';
import IconButton from '../../components/IconButton';
import PopUp from '../../components/PopUp';
import AddContactsForm from '../../components/AddContactsForm';

const ContactsView = () => {
  const [contactFormStyle, setContactFormStyle] = useState(overlay);
  const isFirstRender = useRef(true);
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (contacts.length === 0) {
      contactsNotification(contactsNotify);
    }
  }, [contacts.length]);

  const addNewContact = () => {
    setContactFormStyle({ ...overlay, ...isShown });
  };

  const exitContactsForm = () => {
    setContactFormStyle(overlay);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Container style={contactsContainer}>
            <Filter />
            <ContactsList />
            <IconButton
              type="button"
              aria-label="Добавить контакт"
              style={iconButtonForm}
              onClick={addNewContact}
            >
              <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
                <RiUserAddLine />
              </IconContext.Provider>
            </IconButton>
          </Container>

          <PopUp style={contactFormStyle}>
            <AddContactsForm onClick={exitContactsForm} />
          </PopUp>
        </>
      )}
    </>
  );
};

export default ContactsView;
