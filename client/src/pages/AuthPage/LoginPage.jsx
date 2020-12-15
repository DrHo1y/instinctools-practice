import React from 'react'
import { Formik } from 'formik'
import { loginFormValidationSchema } from '../../validationSchemas'
import {
  ButtonForForm,
  FormErrorForRegister,
  Input,
  LabelForInput,
  LoginRegisterForm,
} from '../../styles/styledComponents'

const LoginPage = (props) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values)
      }}
      validationSchema={loginFormValidationSchema}
    >
      {({
        values,
        errors,
        touched,
        dirty,
        handleSubmit,
        handleChange,
        handleBlur,
        isValid,
      }) => (
        <LoginRegisterForm>
          <LabelForInput>Email</LabelForInput>
          <Input
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`email`}
            type={`email`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && errors.email ? 'error' : ''}
          />
          {touched.email && errors.email && (
            <FormErrorForRegister>{errors.email}</FormErrorForRegister>
          )}
          <LabelForInput>Password</LabelForInput>
          <Input
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`password`}
            type={`password`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && errors.password ? 'error' : ''}
          />
          {touched.password && errors.password && (
            <FormErrorForRegister>{errors.password}</FormErrorForRegister>
          )}
          <ButtonForForm
            width={`100%`}
            height={`40px`}
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            type={'submit'}
          >
            Login
          </ButtonForForm>
        </LoginRegisterForm>
      )}
    </Formik>
  )
}

export default LoginPage
