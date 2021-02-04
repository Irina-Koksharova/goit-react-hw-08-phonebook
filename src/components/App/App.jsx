import { useState, useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, useLocation } from 'react-router-dom';
import { container } from '../../styles/container';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import {
  getIsFetchingCurrentUser,
  getError,
} from '../../redux/auth/auth-selectors';
import {
  serverError,
  showNotification,
} from '../../services/notification/notification';
import Notify from '../Notify';
import Spinner from '../Loader';
import Container from '../Container';
import Header from '../Header';
import Main from '../Main';
import AppBar from '../AppBar';
import AuthNav from '../../components/AuthNav';
import RegisterView from '../../views/RegisterView';
import LogInView from '../../views/LogInView';
import ContactsView from '../../views/ContactsView';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';

//прописать ленивую загрузку компонентов

const App = () => {
  const isError = useSelector(getError);
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (isError === 404) {
      showNotification(serverError);
    }
  }, [isError]);

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Spinner />
      ) : (
        <Container style={container}>
          <Header>
            <AppBar />
          </Header>

          <Main>
            {currentLocation !== '/contacts' && <AuthNav />}
            <Suspense fallback={<Spinner />}>
              <Switch>
                <PublicRoute
                  exact
                  path="/login"
                  redirectTo="/contacts"
                  restricted
                >
                  <LogInView />
                </PublicRoute>

                <PublicRoute exact path="/register" restricted>
                  <RegisterView />
                </PublicRoute>

                <PrivateRoute>
                  <ContactsView path="/contacts" redirectTo="/login" />
                </PrivateRoute>
              </Switch>
            </Suspense>
          </Main>

          <Notify />
        </Container>
      )}
    </>
  );
};

export default App;
