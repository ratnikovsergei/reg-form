import { useState } from 'react';
import { useStore } from '../hooks/useStore';
import styles from './ReactForm.module.css';
import { PASSWORD_PATTERN, EMAIL_PATTERN } from '../patterns/patterns';

const ReactForm = () => {
  const { getState, updateState } = useStore();
  const { email, password, confirmedPassword } = getState();
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const onChange = ({ target }) => {
    updateState(target.name, target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(getState());
  };

  const onEmailBlur = () => {
    let error = null;

    if (!EMAIL_PATTERN.test(email)) {
      error =
        'Неверно указан адрес эл. почты. Для регистрации используйте почту с доменом mail.ru или mail.com';
    }

    setEmailError(error);
  };

  const onPasswordBlur = () => {
    let error = null;

    if (!PASSWORD_PATTERN.test(password)) {
      error =
        'Длина пароля должна быть не менее 8 символов. Пароль должен иметь минимум 1 заглавную букву, 1 цифру и 1 спец. символ';
    }

    setPasswordError(error);
  };

  const checkPasswordsEqual = () => {
    let error = null;

    if (confirmedPassword !== password) {
      error = 'Введенные пароли не совпадают';
    }
    setPasswordError(error);
  };

  return (
    <div className={styles.form}>
      <p>
        <strong>React</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <p>E-mail</p>
        {emailError && <div className={styles.error}>{emailError}</div>}
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          onBlur={onEmailBlur}
        />
        <p>Пароль</p>
        {passwordError && <div className={styles.error}>{passwordError}</div>}
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          onBlur={onPasswordBlur}
        />
        <p>Подтверждение пароля</p>
        <input
          type="password"
          name="confirmedPassword"
          value={confirmedPassword}
          onChange={onChange}
          onBlur={checkPasswordsEqual}
        />
        <button
          type="submit"
          className={styles['submit-btn']}
          disabled={
            emailError ||
            passwordError ||
            !email ||
            !password ||
            confirmedPassword !== password
          }
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default ReactForm;
