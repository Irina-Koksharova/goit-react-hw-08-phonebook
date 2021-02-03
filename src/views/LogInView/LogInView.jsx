import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import s from './LogInView.module.css';
import { logInUser } from '../../redux/auth/auth-operations';
import { getIsLoading, getError } from '../../redux/auth/auth-selectors';
import { clientError, showNotification } from '../../services/notification/notification';
import Spinner from '../../components/Loader';
import InputEmail from '../../components/InputFields/InputEmail';
import InputPassword from '../../components/InputFields/InputPassword';
import Button from '../../components/Button';

const LogInView = () => {
  const isError = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const isFirstRender = useRef(true);
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
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (isError === 400) {
      showNotification(clientError);
    }
  }, [isError]);

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
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ul>
            <InputEmail key="email" name="email" register={register} errors={errors} />
            <InputPassword key="password" name="password" register={register} errors={errors} />
          </ul>
          <Button
            children={'Log In'}
            aria-label="Войти"
            style={{ alignSelf: 'flex-end', marginTop: '85px' }}
          />
        </>
      )}
    </form>
  );
};

export default LogInView;
