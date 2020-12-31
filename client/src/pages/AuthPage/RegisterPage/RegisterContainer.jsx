import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useAlert } from 'react-alert';
import RegisterPage from './RegisterPage';

import { signupClickAction } from '../../../redux/actions/userAction';

const RegisterContainer = (props) => {
  const { app } = props;
  const history = useHistory();
  const alert = useAlert();
  useEffect(() => {
    if (app.msg !== '' && app.msg === 'User created') {
      alert.success(app.msg);
    } else if (app.msg !== '' && app.msg !== 'User created') {
      alert.error(app.msg);
    }
    if (app.msg === 'User created') {
      history.push('/login');
    }
  }, [app.msg, alert, history]);
  return <RegisterPage signupClick={props.signupClickAction} />;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  signupClickAction,
};

RegisterContainer.propTypes = {
  app: PropTypes.object.isRequired,
  location: PropTypes.object,
  partner: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  signupClickAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
