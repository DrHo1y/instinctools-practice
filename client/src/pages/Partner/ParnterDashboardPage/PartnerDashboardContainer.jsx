import React from 'react';
import { connect } from 'react-redux';
import PartnerDashboardPage from './PartnerDashboardPage';

const PartnerDashboardContainer = (props) => {
  return <PartnerDashboardPage />;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PartnerDashboardContainer);
