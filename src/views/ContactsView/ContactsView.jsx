import { useSelector } from 'react-redux';
import s from './ContactsView.module.css';
import { getIsLoading } from '../../redux/auth/auth-selectors';
import Spinner from '../../components/Loader';
import Filter from '../../components/Filter';

const ContactsView = () => {
  const isLoading = useSelector(getIsLoading);

  return <div className={s.container}>{isLoading ? <Spinner /> : <Filter />}</div>;
};

export default ContactsView;
