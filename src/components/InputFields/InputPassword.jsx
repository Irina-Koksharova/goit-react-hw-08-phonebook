import PropTypes from 'prop-types';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { ErrorMessage } from '@hookform/error-message';
import s from './Input.module.css';

const InputPassword = ({ name, register, errors }) => {
  return (
    <li className={s.item}>
      <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
        <RiLockPasswordLine />
      </IconContext.Provider>

      <input
        className={s.input}
        id={name}
        name={name}
        placeholder={name}
        autoComplete="off"
        ref={register({
          required: {
            value: true,
            message: 'This field cannot be empty',
          },
          minLength: {
            value: 7,
            message: 'Minimum password length - 7 characters',
          },
        })}
      ></input>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type} className={s.errorMessage}>
              {message}
            </p>
          ))
        }
      />
    </li>
  );
};

InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default InputPassword;
