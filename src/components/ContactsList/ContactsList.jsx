import { useSelector } from 'react-redux';
import s from './ContactsList.module.css';
import { contactsSelectors } from '../../redux/contacts';
import ContactItem from '../ContactItem/ContactItem';

const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
};

export default ContactsList;
