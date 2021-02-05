import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-toastify';

const notify = document.querySelector('#root-notify');

const Notify = () => {
  return createPortal(<ToastContainer autoClose={3000} />, notify);
};

export default Notify;
