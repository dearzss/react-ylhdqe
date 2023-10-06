import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('email cannot bu null'),

  age: yup.number().positive().integer().required('age cannot be null'),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: 'Please create the stronger password' })
    .required('password cannot be null'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('password cannot be not same'),
});
