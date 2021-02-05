import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiUserAddLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import s from './ContactsView.module.css';
import {
  contactsOperations,
  contactsSelectors,
  contactsSlice,
} from '../../redux/contacts';
import { authSelectors } from '../../redux/auth';
import { iconButtonForm } from '../../styles/iconButton';
import { contactsContainer } from '../../styles/container';
import { isHidden, isShown } from '../../styles/overlay';
import Spinner from '../../components/Loader';
import Container from '../../components/Container';
import Filter from '../../components/Filter';
import ContactsList from '../../components/ContactsList';
import IconButton from '../../components/IconButton';
import PopUpAdd from '../../components/PopUpAdd';
import PopUpEdit from '../../components/PopUpEdit';
import AddContactsForm from '../../components/AddContactsForm';
import EditContactsForm from '../../components/EditContactsForm';

const ContactsView = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);
  const currentAddFormStyle = useSelector(
    contactsSelectors.getAddFormCurrentStyle,
  );
  const currentEditFormStyle = useSelector(
    contactsSelectors.getEditFormCurrentStyle,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

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
              onClick={() =>
                dispatch(contactsSlice.actions.changeAddFormStyle(isShown))
              }
            >
              <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
                <RiUserAddLine />
              </IconContext.Provider>
            </IconButton>
          </Container>

          <PopUpAdd style={currentAddFormStyle}>
            <AddContactsForm
              onClick={() =>
                dispatch(contactsSlice.actions.changeAddFormStyle(isHidden))
              }
            />
          </PopUpAdd>

          <PopUpEdit style={currentEditFormStyle}>
            <EditContactsForm
              onClick={() =>
                dispatch(contactsSlice.actions.changeEditFormStyle(isHidden))
              }
            />
          </PopUpEdit>
        </>
      )}
    </>
  );
};

export default ContactsView;
