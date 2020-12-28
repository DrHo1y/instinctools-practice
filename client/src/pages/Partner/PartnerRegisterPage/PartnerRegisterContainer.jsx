import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PartnerRegisterForm from './PartnerRegisterForm';

import { partnerSignupClickAction } from '../../../redux/actions/userAction';

const PartnerRegisterContainer = (props) => {
  return <PartnerRegisterForm signupClick={props.partnerSignupClickAction} />;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  partnerSignupClickAction,
};

PartnerRegisterContainer.propTypes = {
  app: PropTypes.object,
  location: PropTypes.object,
  partner: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  partnerSignupClickAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnerRegisterContainer);
