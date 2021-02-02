import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import s from './ContactsView.module.css';
import { getIsLoading, getError } from '../../redux/auth/auth-selectors';
import showNotification from '../../services/notification';
import Spinner from '../../components/Loader';

const ContactsView = () => {
  const isError = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    if (isError) {
      showNotification('Sorry, there are some technical problems 😱😱😱. Please, try again later');
    }
  }, [isError]);

  return <>{isLoading ? <Spinner /> : <div>Hello!!!</div>}</>;
};

export default ContactsView;
