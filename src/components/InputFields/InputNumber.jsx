import PropTypes from 'prop-types';
import { MdLocalPhone } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { ErrorMessage } from '@hookform/error-message';
import s from './Input.module.css';

const InputNumber = ({ name, register, errors }) => {
  return (
    <li className={s.item}>
      <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
        <MdLocalPhone />
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
            value: /^[0-9-]+$/,
            message: 'Number is not valid',
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

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default InputNumber;
