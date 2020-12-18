import React from 'react';
import { Formik } from 'formik';
import {
  ButtonForForm,
  FormErrorForRegister,
  Input,
  LabelForInput,
  LoginRegisterForm,
} from '../../../styles/styledComponents';
import { registerFormValidationSchema } from '../../../validationSchemas';

const PartnerRegisterForm = (props) => {
  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        phoneNumber: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
        props.signupClick(values);
      }}
      validationSchema={registerFormValidationSchema}
    >
      {({
        values,
        errors,
        dirty,
        touched,
        isValid,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <LoginRegisterForm>
          <LabelForInput htmlFor={`name`}>Name</LabelForInput>
          <Input
            type={`text`}
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`name`}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name ? 'error' : ''}
          />
          {touched.name && errors.name && (
            <FormErrorForRegister>{errors.name}</FormErrorForRegister>
          )}
          <LabelForInput htmlFor={`surname`}>Surname</LabelForInput>
          <Input
            type={`text`}
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`surname`}
            value={values.surname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.surname && errors.surname ? 'error' : ''}
          />
          {touched.surname && errors.surname && (
            <FormErrorForRegister>{errors.surname}</FormErrorForRegister>
          )}
          <LabelForInput htmlFor={`phoneNumber`}>Phone number</LabelForInput>
          <Input
            type={`text`}
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`phoneNumber`}
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phoneNumber && errors.phoneNumber ? 'error' : ''}
          />
          {touched.phoneNumber && errors.phoneNumber && (
            <FormErrorForRegister>{errors.phoneNumber}</FormErrorForRegister>
          )}
          <LabelForInput htmlFor={`email`}>Email</LabelForInput>
          <Input
            type={`email`}
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`email`}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email ? 'error' : ''}
          />
          {touched.email && errors.email && (
            <FormErrorForRegister>{errors.email}</FormErrorForRegister>
          )}
          <LabelForInput htmlFor={`confirmEmail`}>Confirm email</LabelForInput>
          <Input
            type={`email`}
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`confirmEmail`}
            value={values.confirmEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.confirmEmail && errors.confirmEmail ? 'error' : ''}
          />
          {touched.confirmEmail && errors.confirmEmail && (
            <FormErrorForRegister>{errors.confirmEmail}</FormErrorForRegister>
          )}
          <LabelForInput htmlFor={`password`}>Password</LabelForInput>
          <Input
            type={`password`}
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`password`}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password ? 'error' : ''}
          />
          {touched.password && errors.password && (
            <FormErrorForRegister>{errors.password}</FormErrorForRegister>
          )}
          <LabelForInput htmlFor={`confirmPassword`}>
            Confirm password
          </LabelForInput>
          <Input
            type={`password`}
            width={`100%`}
            height={`40px`}
            margin
            border={`1px solid #eee`}
            name={`confirmPassword`}
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
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
            Register partner
          </ButtonForForm>
        </LoginRegisterForm>
      )}
    </Formik>
  );
};

export default PartnerRegisterForm;
