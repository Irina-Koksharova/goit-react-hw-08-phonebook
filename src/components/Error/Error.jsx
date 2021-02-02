import s from './Error.module.css';

const ServerError = ({ message }) => {
  return <div className={s.error}>{message}</div>;
};

export default ServerError;
