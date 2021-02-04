import PropTypes from 'prop-types';
import s from './Title.module.css';

const Title = ({ children, ...allyProps }) => {
  return (
    <h1 className={s.title} {...allyProps}>
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Title;
