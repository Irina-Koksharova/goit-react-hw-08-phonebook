import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './notification.module.css';

const showNotification = message => {
  toast.warn(message, { className: `${s.notify}` });
};

export default showNotification;
