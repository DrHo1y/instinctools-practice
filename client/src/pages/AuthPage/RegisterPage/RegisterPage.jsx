import React from 'react';
import {
  ButtonForForm,
  FormErrorForRegister,
  Input,
  LabelForInput,
  LoginRegisterForm,
} from '../../../styles/styledComponents';
import { Formik } from 'formik';
import { registerFormValidationSchema } from '../../../validationSchemas';

const RegisterPage = (props) => {
  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
      }}
      validateOnBlur
      onSubmit={(values) => {
        props.signupClick(values);
      }}
      validationSchema={registerFormValidationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <LoginRegisterForm>
          <LabelForInput htmlFor={`name`}>Name</LabelForInput>
          <Input
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`name`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && errors.name ? 'error' : ''}
          />
          {touched.name && errors.name && (
            <FormErrorForRegister>{errors.name}</FormErrorForRegister>
          )}
          <LabelForInput htmlFor={`surname`}>Surname</LabelForInput>
          <Input
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`surname`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
            error={touched.surname && errors.surname ? 'error' : ''}
          />
          {touched.surname && errors.surname && (
            <FormErrorForRegister>{errors.surname}</FormErrorForRegister>
          )}
          <LabelForInput htmlFor={`email`}>Email</LabelForInput>
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
          <LabelForInput htmlFor={`confirmEmail`}>Confirm email</LabelForInput>
          <Input
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`confirmEmail`}
            type={`email`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmEmail}
            error={touched.confirmEmail && errors.confirmEmail ? 'error' : ''}
          />
          {touched.confirmEmail && errors.confirmEmail && (
            <FormErrorForRegister>{errors.confirmEmail}</FormErrorForRegister>
          )}
          <LabelForInput htmlFor={`password`}>Password</LabelForInput>
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
          <LabelForInput htmlFor={`confirmPassword`}>
            Confirm password
          </LabelForInput>
          <Input
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`confirmPassword`}
            type={`password`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            error={
              touched.confirmPassword && errors.confirmPassword ? 'error' : ''
            }
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <FormErrorForRegister>
              {errors.confirmPassword}
            </FormErrorForRegister>
          )}
          <ButtonForForm
            width={`100%`}
            height={`40px`}
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            type={'submit'}
          >
            Registration
          </ButtonForForm>
        </LoginRegisterForm>
      )}
    </Formik>
  );
};

export default RegisterPage;
