import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './ReactHookForm.module.css';
import { validationScheme } from '../scheme/scheme';

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmedPassword: '',
    },
    resolver: yupResolver(validationScheme),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;
  const confirmedPasswordError = errors.confirmedPassword?.message;

  return (
    <div className={styles.form}>
      <p>
        <strong>React Hook Form</strong>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>E-mail</p>
        {errors.email && <div className={styles.error}>{emailError}</div>}
        <input type="email" name="email" {...register('email')} />
        <p>Пароль</p>
        {errors.password && <div className={styles.error}>{passwordError}</div>}
        <input type="password" name="password" {...register('password')} />
        <p>Подтверждение пароля</p>
        {errors.confirmedPassword && (
          <div className={styles.error}>{confirmedPasswordError}</div>
        )}
        <input
          type="password"
          name="confirmedPassword"
          {...register('confirmedPassword')}
        />
        <button
          type="submit"
          className={styles['submit-btn']}
          disabled={!!emailError || !!passwordError || !!confirmedPasswordError}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
