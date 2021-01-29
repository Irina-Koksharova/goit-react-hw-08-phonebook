import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts, getIsLoading, getError } from '../../redux/selectors';
import { mainContainer, subContainer } from '../../styles/container-inline-styles';
import { fetchContacts } from '../../redux/operation';
import { titleMain } from '../../styles/title-inline-styles';
import Spinner from '../Loader';
import ServerError from '../ServerError';
import Container from '../Container';
import Title from '../Title';
import ContactsForm from '../ContactsForm';
import Filter from '../Filter';
import ContactsList from '../ContactsList';

const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <ServerError />}
      {contacts.length > 0 && (
        <Container style={mainContainer}>
          <Container style={subContainer}>
            <Title children={'Phonebook'} style={titleMain} />
            <ContactsForm />
            <ToastContainer autoClose={3000} limit={1} style={{ width: '352px' }} />
          </Container>

          <Container style={subContainer}>
            <Title children={'Contacts'} style={titleMain} />
            <Filter />
            <ContactsList />
          </Container>
        </Container>
      )}
    </>
  );
};

export default App;
