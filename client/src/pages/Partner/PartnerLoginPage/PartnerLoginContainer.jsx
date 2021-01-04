import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useAlert } from 'react-alert';

import PartnerLoginForm from './PartnerLoginForm';

import { partnerSigninClickAction } from '../../../redux/actions/userAction';

const PartnerLoginContainer = (props) => {
  const { app } = props;
  const alert = useAlert();
  useEffect(() => {
    if (app.msg !== '' && app.msg !== 'OK') {
      alert.error(app.msg);
    }
  }, [app.msg, alert]);
  return <PartnerLoginForm signinClick={props.partnerSigninClickAction} />;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  partnerSigninClickAction,
};

PartnerLoginContainer.propTypes = {
  app: PropTypes.object.isRequired,
  location: PropTypes.object,
  partner: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  partnerSigninClickAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnerLoginContainer);
