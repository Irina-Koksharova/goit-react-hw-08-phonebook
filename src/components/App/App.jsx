import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts, getIsLoading, getError } from '../../redux/contacts/contacts-selectors';
import { container, mainContainer, subContainer } from '../../styles/container-inline-styles';
import { section, sectionAppBar } from '../../styles/section-inline-styles';
import { fetchContacts } from '../../redux/contacts/contacts-operation';
import Spinner from '../Loader';
import ServerError from '../ServerError';
import ContactsForm from '../ContactsForm';
import Filter from '../Filter';
import ContactsList from '../ContactsList';
import Container from '../Container';
import AppBar from '../AppBar';
import Section from '../../components/Section';
import AuthNav from '../../components/AuthNav';
import RegisterView from '../../views/RegisterView';
import LogInView from '../../views/LogInView';

//прописать ленивую загрузку компонентов

const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container style={container}>
      <Section style={sectionAppBar}>
        <AppBar />
      </Section>

      <Section style={section}>
        <AuthNav />
        <Switch>
          <Route path="/register">
            <RegisterView />
          </Route>
          <Route path="/login">
            <LogInView />
          </Route>
          <Redirect to="/register" />
        </Switch>
      </Section>

      <>
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
      </>
    </Container>
  );
};

export default App;
