import React from 'react';
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartnerRegisterContainer);
