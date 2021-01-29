import PropTypes from 'prop-types';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';
import s from './ContactItem.module.css';
import IconButton from '../IconButton';
import { iconButtonSecondary } from '../../styles/iconButton-inline-styles';

const ContactItem = ({ id, name, onChange, onDelete }) => {
  return (
    <li className={s.contact}>
      <p className={s.name}>{name}</p>

      <ul className={s.buttonList}>
        <li className={s.buttonItem}>
          <IconButton
            type="button"
            onClick={() => onChange(id)}
            aria-label="Кнопка 'Редактировать контакт'"
            style={iconButtonSecondary}
          >
            <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
              <AiOutlineEdit />
            </IconContext.Provider>
          </IconButton>
        </li>
        <li className={s.buttonItem}>
          <IconButton
            type="button"
            onClick={() => onDelete(id)}
            aria-label="Кнопка 'Удалить контакт'"
            style={{ ...iconButtonSecondary, marginRight: '10px' }}
          >
            <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
              <MdDelete />
            </IconContext.Provider>
          </IconButton>
        </li>
      </ul>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
