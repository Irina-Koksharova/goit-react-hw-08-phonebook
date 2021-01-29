import PropTypes from 'prop-types';
import { MdGroup } from 'react-icons/md';
import { IconContext } from 'react-icons';
import s from './SelectGroup.module.css';
import { initialGroups } from '../../initial/groups';

const SelectGroup = ({ name, register }) => {
  return (
    <li className={s.item}>
      <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
        <MdGroup />
      </IconContext.Provider>

      <select className={s.select} id={name} name={name} ref={register}>
        {Object.values(initialGroups).map(group => (
          <option className={s.option} key={group}>
            {group}
          </option>
        ))}
      </select>
    </li>
  );
};

SelectGroup.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

export default SelectGroup;
