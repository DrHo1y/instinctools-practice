import React from 'react';
import { DashboardContainer } from '../../../styles/styledComponents';

import add from '../../../img/add.png';
import calendar from '../../../img/calendar.png';
import DashboardNav from './DashboardNav/DashboardNav';

const PartnerDashboardPage = (props) => {
  return (
    <DashboardContainer>
      <DashboardNav add={add} calendar={calendar} />
    </DashboardContainer>
  );
};

export default PartnerDashboardPage;
