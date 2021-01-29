import PropTypes from 'prop-types';
import { BsPersonFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import s from './Input.module.css';

const InputName = ({ name, register, errors }) => {
  return (
    <li className={s.item}>
      <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
        <BsPersonFill />
      </IconContext.Provider>

      <input
        className={s.input}
        id={name}
        name={name}
        placeholder={name}
        autoComplete="off"
        ref={register({ required: true })}
      ></input>
      {errors.name && <p className={s.errorMessage}>This field cannot be empty</p>}
    </li>
  );
};

InputName.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default InputName;
