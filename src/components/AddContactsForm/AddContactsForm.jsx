import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { MdDone } from 'react-icons/md';
import { ImExit } from 'react-icons/im';
import { IconContext } from 'react-icons';
import s from './AddContactsForm.module.css';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { iconButtonAdd } from '../../styles/iconButton';
import { contactsNotification } from '../../services/notification/notification';
import Title from '../Title';
import InputName from '../InputFields/InputName.jsx';
import InputNumber from '../InputFields/InputNumber.jsx';
import IconButton from '../IconButton';

const AddContactsForm = ({ onClick }) => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    errors,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onFormSubmit = data => {
    const includesContact = contacts.some(
      contact => contact.name === data.name,
    );
    if (!includesContact) {
      dispatch(contactsOperations.addContact(data));
      onClick();
    } else {
      contactsNotification(`${data.name} is already in your contacts`);
      return;
    }
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
        <Title
          children={'Add new contact'}
          style={{ marginBottom: '20px', fontSize: '16px' }}
        />
        <ul className={s.formList}>
          <InputName
            key="name"
            name="name"
            register={register}
            errors={errors}
          />
          <InputNumber
            key="number"
            name="number"
            register={register}
            errors={errors}
          />
        </ul>

        <IconButton
          type="submit"
          aria-label="Добавить контакт"
          style={{ ...iconButtonAdd, left: '20%' }}
        >
          <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
            <MdDone />
          </IconContext.Provider>
        </IconButton>
      </form>

      <IconButton
        type="submit"
        aria-label="Выйти"
        style={{ ...iconButtonAdd, right: '20%' }}
        onClick={onClick}
      >
        <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
          <ImExit />
        </IconContext.Provider>
      </IconButton>
    </>
  );
};

AddContactsForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddContactsForm;
