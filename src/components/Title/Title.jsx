import PropTypes from 'prop-types';
import s from './Title.module.css';

const Title = ({ children }) => {
  return <h1 className={s.title}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Title;
