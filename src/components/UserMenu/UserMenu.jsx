import { useSelector, useDispatch } from 'react-redux';
import { ImExit } from 'react-icons/im';
import { IconContext } from 'react-icons';
import s from './UserMenu.module.css';
import { titleMain } from '../../styles/title-inline-styles';
import { iconButtonQuit } from '../../styles/iconButton-inline-styles';
import { getUsername } from '../../redux/auth/auth-selectors';
import { logOutUser } from '../../redux/auth/auth-operations';
import Title from '../Title';
import IconButton from '../IconButton';

const UserMenu = () => {
  const user = useSelector(getUsername);
  const dispatch = useDispatch();

  return (
    <>
      <Title style={titleMain} children={`Welcome, ${user}!`} />
      <IconButton
        type="submit"
        aria-label="Кнопка 'Выйти'"
        style={iconButtonQuit}
        onClick={() => dispatch(logOutUser())}
      >
        <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
          <ImExit />
        </IconContext.Provider>
      </IconButton>
    </>
  );
};

export default UserMenu;
