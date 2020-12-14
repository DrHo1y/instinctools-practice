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
  children: yup.number().positive().notRequired(),
})
