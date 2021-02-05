import PropTypes from 'prop-types';
import s from './Main.module.css';

const Main = ({ children }) => {
  return <main className={s.main}>{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
