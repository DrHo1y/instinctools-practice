import * as yup from 'yup'

export const searchFormValidationSchema = yup.object().shape({
  where: yup.string().required('Required field'),
  dateIn: yup
    .date()
    .max(
      new Date(),
      `Date cannot be later than ${new Date().toLocaleDateString()}`
    )
    .min(
      new Date(new Date().getFullYear() + 1),
      `Date must be earlier than ${new Date(
        new Date().getFullYear() + 1
      ).toLocaleDateString()}`
    )
    .required('Select date'),
  dateOut: yup
    .date()
    .max(
      new Date(),
      `Date cannot be later than ${new Date().toLocaleDateString()}`
    )
    .min(
      new Date(new Date().getFullYear() + 1),
      `Date must be earlier than ${new Date(
        new Date().getFullYear() + 1
      ).toLocaleDateString()}`
    ),
  rooms: yup
    .number()
    .positive()
    .min(1, 'The number of rooms cannot be 0')
    .max(3, 'The number of rooms cannot be more than 3')
    .required('Required fireld'),
  adults: yup
    .number()
    .positive()
    .min(1, 'The number of adults cannot be 0')
    .max(4, 'The number of adults connot be mote then 4')
    .required('Required field'),
  children: yup.number().notRequired(),
})

export const registerFormValidationSchema = yup.object().shape({
  name: yup.string().required('Required field'),
  surname: yup.string().required('Reqired field'),
  email: yup
    .string()
    .email('Please enter your email')
    .required('Required field'),
  confirmEmail: yup
    .string()
    .email('Please enter your email')
    .oneOf([yup.ref('email')], 'emails do not match')
    .required('Required field'),
  password: yup
    .string()
    .required('Required field')
    .min(8, 'password must contain at least 8 characters')
    .max(64),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'password not match'),
})

export const loginFormValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter your email')
    .required('Required field'),
  password: yup
    .string()
    .min(8, 'Password must contain at least 8 characters')
    .required('Required field'),
})
