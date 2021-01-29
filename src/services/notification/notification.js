import { toast } from 'react-toastify';
import s from './notification.module.css';

const notification = message => {
  toast.dark(message, {
    className: `${s.toast}`,
    progressClassName: `${s.progress}`,
    position: toast.POSITION.TOP_LEFT,
  });
};

export default notification;
