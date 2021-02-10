import { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { RiUserAddLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import s from './ContactsView.module.css';
import { contactsOperations } from '../../redux/contacts';
import { iconButtonForm } from '../../styles/iconButton';
import { contactsContainer } from '../../styles/container';
import styleContext from '../../components/StylesContext/context.js';
import Container from '../../components/Container';
import Filter from '../../components/Filter';
import ContactsList from '../../components/ContactsList';
import IconButton from '../../components/IconButton';
import PopUpAdd from '../../components/PopUpAdd';
import PopUpEdit from '../../components/PopUpEdit';
import AddContactsForm from '../../components/AddContactsForm';
import EditContactsForm from '../../components/EditContactsForm';

const ContactsView = () => {
  const { stylePopUpAdd, toggleStylePopUpAdd, stylePopUpEdit } = useContext(
    styleContext,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container style={contactsContainer}>
        <Filter />
        <ContactsList />
        <IconButton
          type="button"
          aria-label="Добавить контакт"
          style={iconButtonForm}
          onClick={toggleStylePopUpAdd}
        >
          <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
            <RiUserAddLine />
          </IconContext.Provider>
        </IconButton>
      </Container>

      <PopUpAdd style={stylePopUpAdd}>
        <AddContactsForm />
      </PopUpAdd>

      <PopUpEdit style={stylePopUpEdit}>
        <EditContactsForm />
      </PopUpEdit>
    </>
  );
};

export default ContactsView;
