import { useSelector, useDispatch } from 'react-redux';
import { ImExit } from 'react-icons/im';
import { IconContext } from 'react-icons';
import s from './UserMenu.module.css';
import { iconButtonQuit } from '../../styles/iconButton';
import { authOperations, authSelectors } from '../../redux/auth';
import Title from '../Title';
import IconButton from '../IconButton';

const UserMenu = () => {
  const user = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <>
      <Title children={`Welcome, ${user}!`} />
      <IconButton
        type="submit"
        aria-label="Выйти"
        style={iconButtonQuit}
        onClick={() => dispatch(authOperations.logOutUser())}
      >
        <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
          <ImExit />
        </IconContext.Provider>
      </IconButton>
    </>
  );
};

export default UserMenu;
