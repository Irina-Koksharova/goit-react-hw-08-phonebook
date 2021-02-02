import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={s.list}>
      <li className={s.listItem}>
        <NavLink to="/login" exact className={s.link} activeClassName={s.activeLink}>
          Log in
        </NavLink>
      </li>
      <li className={s.listItem}>
        <NavLink to="/register" exact className={s.link} activeClassName={s.activeLink}>
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
