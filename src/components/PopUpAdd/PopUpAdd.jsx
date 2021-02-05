import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './PopUpAdd.module.css';

const popUpAddRoot = document.querySelector('#root-popUpAdd');

const PopUpAdd = ({ children, style }) => {
  return createPortal(
    <div style={style}>
      <div className={s.popUpContainer}>{children}</div>
    </div>,
    popUpAddRoot,
  );
};

PopUpAdd.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object.isRequired,
};

export default PopUpAdd;
