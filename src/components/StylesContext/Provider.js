import PropTypes from 'prop-types';
import { useState } from 'react';
import styleContext from './context';
import { isHidden, isShown } from '../../styles/overlay';

const Provider = ({ children }) => {
  const [stylePopUpAdd, setStylePopUpAdd] = useState(isHidden);
  const [stylePopUpEdit, setStylePopUpEdit] = useState(isHidden);

  const toggleStylePopUpAdd = () => {
    stylePopUpAdd === isHidden
      ? setStylePopUpAdd(isShown)
      : setStylePopUpAdd(isHidden);
  };

  const toggleStylePopUpEdit = () => {
    stylePopUpEdit === isHidden
      ? setStylePopUpEdit(isShown)
      : setStylePopUpEdit(isHidden);
  };

  const providerValue = () => {
    return {
      stylePopUpAdd,
      toggleStylePopUpAdd,
      stylePopUpEdit,
      toggleStylePopUpEdit,
    };
  };

  return (
    <styleContext.Provider value={providerValue()}>
      {children}
    </styleContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Provider;
