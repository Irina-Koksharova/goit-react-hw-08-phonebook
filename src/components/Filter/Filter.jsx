import { useSelector, useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import s from './Filter.module.css';
import { changeFilter } from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <input
        className={s.input}
        id="input"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Find contact by name"
        autoComplete="off"
      />
      <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
        <FiSearch />
      </IconContext.Provider>
    </>
  );
};

export default Filter;
