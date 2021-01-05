import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { useAlert } from 'react-alert';

import PartnerRegisterForm from './PartnerRegisterForm';

import { partnerSignupClickAction } from '../../../redux/actions/userAction';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';

const PartnerRegisterContainer = (props) => {
  const alert = useAlert();
  const history = useHistory();
  const { app } = props;
  useEffect(() => {
    if (app.msg !== '' && app.msg === 'Partner created') {
      alert.success(app.msg);
      history.push('/partner/login');
    }
    if (app.msg !== '' && app.msg !== 'Partner created') {
      alert.error(app.msg);
    }
  }, [app.msg, alert, history]);
  return (
    <ErrorBoundary>
      <PartnerRegisterForm signupClick={props.partnerSignupClickAction} />
    </ErrorBoundary>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  partnerSignupClickAction,
};

PartnerRegisterContainer.propTypes = {
  app: PropTypes.object.isRequired,
  location: PropTypes.object,
  partner: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  partnerSignupClickAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnerRegisterContainer);
