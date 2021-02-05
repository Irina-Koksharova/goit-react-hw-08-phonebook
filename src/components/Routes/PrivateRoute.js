import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const PrivateRoute = ({ children, redirectTo = '/login', ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
