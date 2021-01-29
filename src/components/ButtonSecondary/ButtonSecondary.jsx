import PropTypes from 'prop-types';
import s from './ButtonSecondary.module.css';

const ButtonSecondary = ({ onClick, children, ...allyProps }) => {
  return (
    <button type="button" className={s.button} onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
};

ButtonSecondary.defaultProps = {
  onClick: () => null,
  children: null,
};

ButtonSecondary.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default ButtonSecondary;
