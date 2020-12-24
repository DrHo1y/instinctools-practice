import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PartnerDashboardPage from './PartnerDashboardPage';

import { getFacilityForPartnerLoadingAction } from '../../../redux/actions/partnerAction';

const PartnerDashboardContainer = (props) => {
  const { getFacilityForPartnerLoadingAction } = props;
  useEffect(() => {
    getFacilityForPartnerLoadingAction();
  }, [getFacilityForPartnerLoadingAction]);
  if (!props.app.loading) {
    return <PartnerDashboardPage facilities={props.parner.facilities} />;
  } else {
    return <div>Loading</div>;
  }
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  getFacilityForPartnerLoadingAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnerDashboardContainer);
