import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';
import s from './ContactItem.module.css';
import { iconButtonEdit } from '../../styles/iconButton';
import {
  contactsOperations,
  contactsSelectors,
  contactsSlice,
} from '../../redux/contacts';
import styleContext from '../../components/StylesContext/context.js';
import IconButton from '../IconButton';

const ContactItem = ({ id, name }) => {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const { toggleStylePopUpEdit } = useContext(styleContext);
  const { editContact, changeFilter } = contactsSlice.actions;

  const onEdit = id => {
    toggleStylePopUpEdit();
    dispatch(editContact(id));
  };

  const onDelete = id => {
    dispatch(contactsOperations.deleteContact(id));
    if (filter !== '') {
      dispatch(changeFilter(''));
    }
  };

  return (
    <li className={s.contact}>
      <p className={s.name}>{name}</p>

      <ul className={s.buttonList}>
        <li className={s.buttonItem}>
          <IconButton
            type="button"
            onClick={() => onEdit(id)}
            aria-label="Редактировать контакт"
            style={iconButtonEdit}
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
            aria-label="Удалить контакт"
            style={iconButtonEdit}
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
};

export default ContactItem;
