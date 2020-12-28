import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

DashboartAddContainer.propTypes = {
  app: PropTypes.object,
  location: PropTypes.object,
  partner: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  createFacilityClickAction: PropTypes.func,
  loadingCityAction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboartAddContainer);
