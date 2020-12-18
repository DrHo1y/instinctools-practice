import React from 'react';
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

export default connect(mapStateToProps, mapDispatchToProps)(PartnerLoginContainer);
