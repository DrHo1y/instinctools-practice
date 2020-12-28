import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterPage from './RegisterPage';

import { signupClickAction } from '../../../redux/actions/userAction';

const RegisterContainer = (props) => {
  console.log(props);
  return <RegisterPage signupClick={props.signupClickAction} />;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  signupClickAction,
};

RegisterContainer.propTypes = {
  app: PropTypes.object,
  location: PropTypes.object,
  partner: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  signupClickAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
