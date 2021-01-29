import { useSelector } from 'react-redux';
import s from './ServerError.module.css';
import { getError } from '../../redux/selectors';

const ServerError = () => {
  const error = useSelector(getError);

  return <div className={s.error}>{error}</div>;
};

export default ServerError;
