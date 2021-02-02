import { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { container } from '../../styles/container-inline-styles';
import { section, sectionAppBar } from '../../styles/section-inline-styles';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import { getIsFetchingCurrentUser } from '../../redux/auth/auth-selectors';
import Spinner from '../Loader';
import Container from '../Container';
import Section from '../../components/Section';
import AppBar from '../AppBar';
import AuthNav from '../../components/AuthNav';
import RegisterView from '../../views/RegisterView';
import LogInView from '../../views/LogInView';
import ContactsView from '../../views/ContactsView';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';

//прописать ленивую загрузку компонентов

const App = () => {
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Spinner />
      ) : (
        <Container style={container}>
          <Section style={sectionAppBar}>
            <AppBar />
          </Section>

          <Section style={section}>
            <AuthNav />
            <Switch>
              <Suspense fallback={<Spinner />}>
                <PublicRoute path="/register" restricted>
                  <RegisterView />
                </PublicRoute>

                <PublicRoute path="/login" restricted>
                  <LogInView />
                </PublicRoute>

                <PrivateRoute>
                  <ContactsView path="/contacts" />
                </PrivateRoute>
              </Suspense>
            </Switch>
          </Section>

          <ToastContainer autoClose={5000} />
        </Container>
      )}
    </>
  );
};

export default App;
