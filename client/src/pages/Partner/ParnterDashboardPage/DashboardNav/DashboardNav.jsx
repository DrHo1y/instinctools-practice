import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  DashboardNavContainer,
  DashboardNavMenu,
  DashboadrNavItem,
  Img,
} from '../../../../styles/styledComponents';
import DashboardItem from './DashboardItem';

const DashboardNav = (props) => {
  const history = useHistory();
  return (
    <DashboardNavContainer>
      <DashboardNavMenu>
        <DashboardItem img={props.calendar} text='My calendar' />
        <DashboardItem img={props.add} text='Add object' path={'/dashboard/add'} />
      </DashboardNavMenu>
    </DashboardNavContainer>
  );
};

export default DashboardNav;
