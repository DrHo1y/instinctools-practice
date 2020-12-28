import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';

import { signinClickAction } from '../../../redux/actions/userAction';

const LoginContainer = (props) => {
  return <LoginPage signinClick={props.signinClickAction} />;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  signinClickAction,
};

LoginContainer.propTypes = {
  app: PropTypes.object,
  location: PropTypes.object,
  partner: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  signinClickAction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
