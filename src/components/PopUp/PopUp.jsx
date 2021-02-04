import { createPortal } from 'react-dom';
import s from './PopUp.module.css';

const popUpRoot = document.querySelector('#root-popUp');

const PopUp = ({ children, style }) => {
  return createPortal(
    <div style={style}>
      <div className={s.popUpContainer}>{children}</div>
    </div>,
    popUpRoot,
  );
};

export default PopUp;
