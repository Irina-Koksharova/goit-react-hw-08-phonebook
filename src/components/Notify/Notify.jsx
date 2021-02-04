import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import s from './Notify.module.css';

const notify = document.querySelector('#root-notify');

const Notify = ({ children, style }) => {
  return createPortal(<ToastContainer autoClose={3000} />, notify);
};

export default Notify;
