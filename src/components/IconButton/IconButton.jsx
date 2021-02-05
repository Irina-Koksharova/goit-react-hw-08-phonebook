import PropTypes from 'prop-types';
import s from './IconButton.module.css';

const IconButton = ({ type, children, onClick, ...allyProps }) => (
  <button className={s.button} type={type} onClick={onClick} {...allyProps}>
    {children}
  </button>
);

IconButton.defaultProps = {
  type: 'button',
  children: null,
  onClick: () => null,
};

IconButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
