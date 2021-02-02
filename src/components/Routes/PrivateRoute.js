import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

const PrivateRoute = ({ children, redirectTo = '/login', ...routeProps }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <Route {...routeProps}>{isLoggedIn ? children : <Redirect to={redirectTo} />}</Route>;
};

export default PrivateRoute;
