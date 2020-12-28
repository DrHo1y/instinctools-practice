import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { loginFormValidationSchema } from '../../../validationSchemas';
import {
  ButtonForForm,
  FormErrorForRegister,
  Input,
  LabelForInput,
  Link,
  LoginRegisterForm,
} from '../../../styles/styledComponents';

const PartnerLoginForm = (props) => {
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnBlur
      onSubmit={(values) => {
        props.signinClick(values);
      }}
      validationSchema={loginFormValidationSchema}
    >
      {({ values, errors, touched, isValid, dirty, handleSubmit, handleBlur, handleChange }) => (
        <LoginRegisterForm>
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
          <ButtonForForm
            width={`100%`}
            height={`40px`}
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            type={'submit'}
          >
            Login
          </ButtonForForm>
          <Link onClick={() => history.push('/partner/register')}>Register new partner</Link>
        </LoginRegisterForm>
      )}
    </Formik>
  );
};

PartnerLoginForm.propTypes = {
  signinClick: PropTypes.func,
};

export default PartnerLoginForm;
