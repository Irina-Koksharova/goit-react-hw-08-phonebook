import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactsView.module.css';
import { getIsLoading } from '../../redux/auth/auth-selectors';
import { getContacts } from '../../redux/contacts/contacts-operation';
import Spinner from '../../components/Loader';
import Filter from '../../components/Filter';

const ContactsView = () => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>{isLoading ? <Spinner /> : <Filter />}</div>
  );
};

export default ContactsView;
