import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick, children, ...allyProps }) => {
  return (
    <button className={s.button} type="submit" onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
};

export default Button;
