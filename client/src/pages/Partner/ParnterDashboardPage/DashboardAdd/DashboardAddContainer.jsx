import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DashboardAddForm from './DashboardAddForm';

import { createFacilityClickAction } from '../../../../redux/actions/partnerAction';
import { loadingCityAction } from '../../../../redux/actions/locationAction';

const DashboartAddContainer = (props) => {
  const { loadingCityAction } = props;
  useEffect(() => {
    loadingCityAction('5fe0a3148cb0a95cf5cccc07');
  }, [loadingCityAction]);
  return (
    <DashboardAddForm createClick={props.createFacilityClickAction} cities={props.location.city} />
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  createFacilityClickAction,
  loadingCityAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboartAddContainer);
