import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import s from './RegisterView.module.css';
import InputName from '../../components/InputFields/InputName';
import InputEmail from '../../components/InputFields/InputEmail';
import InputPassword from '../../components/InputFields/InputPassword';
import Button from '../../components/Button';

const RegisterView = () => {
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
    console.log(data);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      <ul>
        <InputName key="name" name="name" register={register} errors={errors} />
        <InputEmail key="email" name="email" register={register} errors={errors} />
        <InputPassword key="password" name="password" register={register} errors={errors} />
      </ul>
      <Button
        children={'Register'}
        aria-label="Кнопка 'Зарегистрироваться'"
        style={{ alignSelf: 'flex-end', marginTop: '20px' }}
      />
    </form>
  );
};

export default RegisterView;
