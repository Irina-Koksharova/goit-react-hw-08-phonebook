import PropTypes from 'prop-types';
import s from './Header.module.css';

const Header = ({ children }) => {
  return <header className={s.head}>{children}</header>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
