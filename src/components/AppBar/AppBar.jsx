import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import UserMenu from '../UserMenu';
import Title from '../Title';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Title
          children={'To enter the application, please, log in or register'}
        />
      )}
    </>
  );
};

export default AppBar;
