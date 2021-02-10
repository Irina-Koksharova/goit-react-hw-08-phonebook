import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

const Spinner = ({ width = '70', height = '70' }) => {
  return (
    <div className={s.spinner}>
      <Loader type="Circles" color="white" width={width} height={height} />
    </div>
  );
};

Spinner.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Spinner;
