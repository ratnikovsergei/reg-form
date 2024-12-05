import * as yup from 'yup';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from '../patterns/patterns';

export const validationScheme = yup.object().shape({
  email: yup
    .string()
    .matches(
      EMAIL_PATTERN,
      'Неверно указан адрес эл. почты. Для регистрации используйте почту с доменом mail.ru или mail.com'
    )
    .required(),
  password: yup
    .string()
    .matches(
      PASSWORD_PATTERN,
      'Длина пароля должна быть не менее 8 символов. Пароль должен иметь минимум 1 заглавную букву, 1 цифру и 1 спец. символ'
    )
    .required(),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Введенные пароли не совпадают')
    .required('Необходимо подтвердить пароль'),
});
