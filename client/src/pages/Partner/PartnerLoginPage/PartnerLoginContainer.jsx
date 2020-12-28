import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PartnerLoginForm from './PartnerLoginForm';

import { partnerSigninClickAction } from '../../../redux/actions/userAction';

const PartnerLoginContainer = (props) => {
  return <PartnerLoginForm signinClick={props.partnerSigninClickAction} />;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  partnerSigninClickAction,
};

PartnerLoginContainer.propTypes = {
  app: PropTypes.object,
  location: PropTypes.object,
  partner: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  partnerSigninClickAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnerLoginContainer);
