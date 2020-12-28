import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

PartnerDashboardContainer.propTypes = {
  app: PropTypes.object,
  location: PropTypes.object,
  partner: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  getFacilityForPartnerLoadingAction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnerDashboardContainer);
