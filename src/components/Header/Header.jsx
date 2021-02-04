import s from './Header.module.css';

const Header = ({ children }) => {
  return <header className={s.head}>{children}</header>;
};

export default Header;
