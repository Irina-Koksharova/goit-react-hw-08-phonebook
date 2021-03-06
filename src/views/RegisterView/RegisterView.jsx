import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import s from './RegisterView.module.css';
import { authOperations, authSelectors } from '../../redux/auth';
import Spinner from '../../components/Loader';
import InputName from '../../components/InputFields/InputName';
import InputEmail from '../../components/InputFields/InputEmail';
import InputPassword from '../../components/InputFields/InputPassword';
import Button from '../../components/Button';

const RegisterView = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);
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
    dispatch(authOperations.registerUser(data));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ul>
            <InputName
              key="name"
              name="name"
              register={register}
              errors={errors}
            />
            <InputEmail
              key="email"
              name="email"
              register={register}
              errors={errors}
            />
            <InputPassword
              key="password"
              name="password"
              register={register}
              errors={errors}
            />
          </ul>
          <Button
            children={'Sign Up'}
            aria-label="Зарегистрироваться"
            style={{ alignSelf: 'flex-end', marginTop: '20px' }}
          />
        </>
      )}
    </form>
  );
};

export default RegisterView;
