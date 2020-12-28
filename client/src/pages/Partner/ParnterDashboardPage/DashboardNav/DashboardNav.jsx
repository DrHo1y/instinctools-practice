import React from 'react';
import PropTypes from 'prop-types';
import { DashboardNavContainer, DashboardNavMenu } from '../../../../styles/styledComponents';
import DashboardItem from './DashboardItem';

const DashboardNav = (props) => {
  return (
    <DashboardNavContainer>
      <DashboardNavMenu>
        <DashboardItem img={props.calendar} text='My calendar' />
        <DashboardItem img={props.add} text='Add object' path={'/dashboard/add'} />
      </DashboardNavMenu>
    </DashboardNavContainer>
  );
};

DashboardNav.propTypes = {
  add: PropTypes.string,
  calendar: PropTypes.string,
};

export default DashboardNav;
