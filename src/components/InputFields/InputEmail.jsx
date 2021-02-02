import PropTypes from 'prop-types';
import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { ErrorMessage } from '@hookform/error-message';
import s from './Input.module.css';

const InputEmail = ({ name, register, errors }) => {
  return (
    <li className={s.item}>
      <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
        <MdEmail />
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
          pattern: {
            value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z_-]+(\.[a-z_-]+)*\.[a-z]{2,6}$/,
            message: 'Email is not valid',
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

InputEmail.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default InputEmail;
