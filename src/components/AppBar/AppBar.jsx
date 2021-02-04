import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import UserMenu from '../UserMenu';
import Title from '../Title';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Title children={'To enter the application, please, log in or register'} />
      )}
    </>
  );
};

export default AppBar;
