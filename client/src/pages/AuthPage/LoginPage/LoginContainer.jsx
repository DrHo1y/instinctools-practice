import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useAlert } from 'react-alert';
import LoginPage from './LoginPage';

import { signinClickAction } from '../../../redux/actions/userAction';

const LoginContainer = (props) => {
  const alert = useAlert();
  const { app } = props;
  useEffect(() => {
    if (app.msg !== '' && app.msg !== 'OK') {
      alert.error(app.msg);
    }
  }, [app.msg, alert]);
  return <LoginPage signinClick={props.signinClickAction} app={props.app} />;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  signinClickAction,
};

LoginContainer.propTypes = {
  app: PropTypes.object.isRequired,
  location: PropTypes.object,
  partner: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  signinClickAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
