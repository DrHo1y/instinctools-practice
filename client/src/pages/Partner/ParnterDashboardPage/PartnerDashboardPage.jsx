import React from 'react';
import PropTypes from 'prop-types';
import { DashboardContainer } from '../../../styles/styledComponents';

import add from '../../../img/add.png';
import calendar from '../../../img/calendar.png';
import DashboardNav from './DashboardNav/DashboardNav';
import DashboardTable from './DashboardFacilitiesTable/DashboardTable';

const PartnerDashboardPage = (props) => {
  return (
    <DashboardContainer>
      <DashboardNav add={add} calendar={calendar} />
      <DashboardTable facilities={props.facilities} deleteFacilityById={props.deleteFacilityById} />
    </DashboardContainer>
  );
};

PartnerDashboardPage.propTypes = {
  facilities: PropTypes.array.isRequired,
};

export default PartnerDashboardPage;
