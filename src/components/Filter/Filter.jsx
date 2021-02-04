import { useSelector, useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import s from './Filter.module.css';
import { contactsSlice } from '../../redux/contacts/contacts-slice';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <input
        className={s.input}
        id="input"
        value={value}
        onChange={e =>
          dispatch(contactsSlice.actions.changeFilter(e.target.value))
        }
        placeholder="find contact by name"
        autoComplete="off"
      />
      <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
        <FiSearch />
      </IconContext.Provider>
    </>
  );
};

export default Filter;
