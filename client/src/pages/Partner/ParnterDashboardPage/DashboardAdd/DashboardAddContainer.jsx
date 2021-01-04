import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardAddForm from './DashboardAddForm';

import { createFacilityClickAction } from '../../../../redux/actions/partnerAction';
import { loadingCityAction } from '../../../../redux/actions/locationAction';

const DashboartAddContainer = (props) => {
  const { loadingCityAction, app } = props;
  const history = useHistory();
  useEffect(() => {
    loadingCityAction('5fe0a3148cb0a95cf5cccc07');
  }, [loadingCityAction]);
  useEffect(() => {
    if (app.msg !== '' && app.msg === 'Success') {
      history.push('/dashobard');
    }
  }, [app.msg, history]);
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
  app: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  partner: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  createFacilityClickAction: PropTypes.func.isRequired,
  loadingCityAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboartAddContainer);
