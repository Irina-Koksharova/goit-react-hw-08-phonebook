import { useState, useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, useLocation } from 'react-router-dom';
import { container } from '../../styles/container';
import { authOperations, authSelectors } from '../../redux/auth';
import { contactsSelectors } from '../../redux/contacts';
import {
  serverError,
  showNotification,
} from '../../services/notification/notification';
import StyleProvider from '../StylesContext/Provider';
import Notify from '../Notify';
import Spinner from '../Loader';
import Container from '../Container';
import Header from '../Header';
import Main from '../Main';
import AppBar from '../AppBar';
import AuthNav from '../../components/AuthNav';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';

const LogInView = lazy(() =>
  import('../../views/LogInView' /* webpackChunkName: "login" */),
);
const RegisterView = lazy(() =>
  import('../../views/RegisterView' /* webpackChunkName: "register" */),
);
const ContactsView = lazy(() =>
  import('../../views/ContactsView' /* webpackChunkName: "contacts" */),
);

const App = () => {
  const authError = useSelector(authSelectors.getError);
  const contactsError = useSelector(contactsSelectors.getError);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );
  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (authError === 500 || contactsError === 500) {
      showNotification(serverError);
    }
  }, [authError, contactsError]);

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
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
            <Suspense fallback={null}>
              {currentLocation !== '/contacts' && <AuthNav />}
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
                  <StyleProvider>
                    <ContactsView path="/contacts" redirectTo="/login" />
                  </StyleProvider>
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
