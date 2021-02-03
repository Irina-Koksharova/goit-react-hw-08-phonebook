import { useSelector } from 'react-redux';
import s from './ContactsView.module.css';
import { getIsLoading } from '../../redux/auth/auth-selectors';
import Spinner from '../../components/Loader';

const ContactsView = () => {
  const isLoading = useSelector(getIsLoading);

  return <>{isLoading ? <Spinner /> : <div>Hello!!!</div>}</>;
};

export default ContactsView;
