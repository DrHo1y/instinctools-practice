import React from 'react';
import { connect } from 'react-redux';
import DashboardAddForm from './DashboardAddForm';

const DashboartAddContainer = (props) => {
  return <DashboardAddForm />;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboartAddContainer);
