import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './notification.module.css';

const clientError =
  'There is no such user. Please, check your email and password';

const serverError =
  'Sorry, there are some technical problems. Please, try again later';

const showNotification = message => {
  toast.warn(message, { className: `${s.notify}` });
};

const contactsNotification = message => {
  toast.warn(message, { className: `${s.contactsNotify}` });
};

export { clientError, serverError, showNotification, contactsNotification };
