import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PartnerDashboardPage from './PartnerDashboardPage';

import {
  getFacilityForPartnerLoadingAction,
  deleteFacilityById,
} from '../../../redux/actions/partnerAction';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';

const PartnerDashboardContainer = (props) => {
  const { getFacilityForPartnerLoadingAction, deleteFacilityById } = props;
  useEffect(() => {
    getFacilityForPartnerLoadingAction();
  }, [getFacilityForPartnerLoadingAction]);
  if (!props.app.loading) {
    return (
      <ErrorBoundary>
        <PartnerDashboardPage
          facilities={props.parner.facilities}
          deleteFacilityById={deleteFacilityById}
        />
      </ErrorBoundary>
    );
  } else {
    return <div>Loading</div>;
  }
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  getFacilityForPartnerLoadingAction,
  deleteFacilityById,
};

PartnerDashboardContainer.propTypes = {
  app: PropTypes.object.isRequired,
  location: PropTypes.object,
  parner: PropTypes.object.isRequired,
  user: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  getFacilityForPartnerLoadingAction: PropTypes.func.isRequired,
  deleteFacilityById: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnerDashboardContainer);
