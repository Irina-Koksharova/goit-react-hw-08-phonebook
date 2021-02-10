import { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { MdDone } from 'react-icons/md';
import { ImExit } from 'react-icons/im';
import { IconContext } from 'react-icons';
import s from './EditContactsForm.module.css';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { iconButtonAdd } from '../../styles/iconButton';
import { contactsNotification } from '../../services/notification/notification';
import styleContext from '../../components/StylesContext/context.js';
import Title from '../Title';
import InputName from '../InputFields/InputName.jsx';
import InputNumber from '../InputFields/InputNumber.jsx';
import IconButton from '../IconButton';

const EditContactsForm = () => {
  const { toggleStylePopUpEdit } = useContext(styleContext);
  const selectedContactId = useSelector(contactsSelectors.getSelectedContact);
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
  });

  useEffect(() => {
    const selectedContact = contacts.find(({ id }) => id === selectedContactId);
    const setInputValues = ({ name, number }) => {
      const inputFields = { name, number };
      return Object.entries(inputFields).forEach(prop =>
        setValue(prop[0], prop[1]),
      );
    };
    if (selectedContactId) {
      setInputValues(selectedContact);
    }
  }, [contacts, selectedContactId, setValue]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onFormSubmit = data => {
    const includesContact = contacts.some(({ name }) => name === data.name);
    const update = { ...data, id: selectedContactId };
    if (!includesContact) {
      dispatch(contactsOperations.updateContact(update));
      toggleStylePopUpEdit();
    } else {
      toggleStylePopUpEdit();
      contactsNotification(`${data.name} is already in your contacts`);
      return;
    }
  };

  return (
    <>
      {selectedContactId && (
        <>
          <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
            <Title
              children={'Edit contact'}
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
              aria-label="Обновить контакт"
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
            onClick={toggleStylePopUpEdit}
          >
            <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
              <ImExit />
            </IconContext.Provider>
          </IconButton>
        </>
      )}
    </>
  );
};

export default EditContactsForm;
