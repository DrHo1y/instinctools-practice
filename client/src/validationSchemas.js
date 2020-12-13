import * as yup from 'yup'

export const searchFormValidationSchema = yup.object().shape({
  where: yup.string().required('Required field'),
  dateIn: yup.date().required('Select date'),
  dateOut: yup.date().notRequired(),
  rooms: yup.number().required('Required fireld'),
  adults: yup.number().required('Required field'),
  children: yup.number().notRequired(),
})
