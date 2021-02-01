import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import s from './LogInView.module.css';
import InputEmail from '../../components/InputFields/InputEmail';
import InputPassword from '../../components/InputFields/InputPassword';
import Button from '../../components/Button';
import { logInUser } from '../../redux/auth/auth-operations';

const LogInView = () => {
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
    dispatch(logInUser(data));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      <ul>
        <InputEmail key="email" name="email" register={register} errors={errors} />
        <InputPassword key="password" name="password" register={register} errors={errors} />
      </ul>
      <Button
        children={'Log In'}
        aria-label="Кнопка 'Войти'"
        style={{ alignSelf: 'flex-end', marginTop: '85px' }}
      />
    </form>
  );
};

export default LogInView;
