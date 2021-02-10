import { useSelector } from 'react-redux';
import s from './ContactsList.module.css';
import { contactsSelectors } from '../../redux/contacts';
import Spinner from '../../components/Loader';
import ContactItem from '../ContactItem/ContactItem';

const ContactsList = () => {
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  return (
    <>
      {isLoading ? (
        <Spinner width={'40'} height={'40'} />
      ) : (
        <ul className={s.list}>
          {contacts &&
            contacts.map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
