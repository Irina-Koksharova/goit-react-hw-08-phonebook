import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={s.list}>
      <li className={s.listItem}>
        <NavLink exact to="/login" className={s.link} activeClassName={s.activeLink}>
          Sign In
        </NavLink>
      </li>
      <li className={s.listItem}>
        <NavLink exact to="/register" className={s.link} activeClassName={s.activeLink}>
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
