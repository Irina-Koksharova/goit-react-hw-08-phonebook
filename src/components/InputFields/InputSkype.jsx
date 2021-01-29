import PropTypes from 'prop-types';
import { IoLogoSkype } from 'react-icons/io';
import { IconContext } from 'react-icons';
import s from './Input.module.css';

const InputSkype = ({ name, register }) => {
  return (
    <li className={s.item}>
      <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
        <IoLogoSkype />
      </IconContext.Provider>

      <input
        className={s.input}
        id={name}
        name={name}
        placeholder={name}
        autoComplete="off"
        ref={register}
      ></input>
    </li>
  );
};

InputSkype.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

export default InputSkype;
