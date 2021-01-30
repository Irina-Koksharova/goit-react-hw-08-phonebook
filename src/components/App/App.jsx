import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts, getIsLoading, getError } from '../../redux/selectors';
import { startContainer, mainContainer, subContainer } from '../../styles/container-inline-styles';
import { fetchContacts } from '../../redux/operation';
import { titleMain } from '../../styles/title-inline-styles';
import Spinner from '../Loader';
import ServerError from '../ServerError';
import Container from '../Container';
import Title from '../Title';
import ContactsForm from '../ContactsForm';
import Filter from '../Filter';
import ContactsList from '../ContactsList';
import AuthNav from '../../components/AuthNav';
import RegisterView from '../../views/RegisterView';
import LogInView from '../../views/LogInView';

const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container style={startContainer}>
      <AuthNav />
      <Switch>
        <Route path="/register">
          <RegisterView />
        </Route>
        <Route path="/login">
          <LogInView />
        </Route>
      </Switch>
      {/* {isLoading && <Spinner />}
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
      )} */}
    </Container>
  );
};

export default App;
