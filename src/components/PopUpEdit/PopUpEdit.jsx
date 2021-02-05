import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './PopUpEdit.module.css';

const popUpEditRoot = document.querySelector('#root-popUpEdit');

const PopUpEdit = ({ children, style }) => {
  return createPortal(
    <div style={style}>
      <div className={s.popUpContainer}>{children}</div>
    </div>,
    popUpEditRoot,
  );
};

PopUpEdit.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string.isRequired,
};

export default PopUpEdit;
